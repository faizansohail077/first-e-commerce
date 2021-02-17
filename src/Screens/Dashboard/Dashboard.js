import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import db from '../../firebase'

const Dashboard = () => {
    const { user } = useSelector(state => state.CartReducer)
    const [quantity, setQuantity] = useState(1)
    const { product } = useSelector((state => state.ProductReducer))
    // console.log('this is product', product)
    const dispatch = useDispatch()
    const [userItem, setUserItem] = useState([])
    const [productID, setProductID] = useState()
    const history = useHistory()
    const findItem = (productId) => userItem.filter((item) => item.id !== productId)
    const remove = (productID) => {
        // let cart = findItem(productID)
        // console.log('carts ', cart)
        db.collection('users').doc(user?.id).collection('order').doc(productID).delete()
    }

    // let orderRef = db.collection('users').doc(user?.id).collection('items').doc().id
    // let doc_id = orderRef.doc().id
    // console.log(orderRef, 'id')

    // useEffect(() => {
    //     const database = db.collection('users').doc(user?.id).collection('order').doc('itemList').onSnapshot((doc) => {
    //         if (doc.exists) {
    //             console.log("Document data:", doc.data().cart);
    //             const dataDb = doc.data().cart
    //             setUserItem(dataDb)
    //             console.log(dataDb, 'data')
    //         } else {
    //             console.log("No such document!");
    //         }
    //     })
    // }, []);
    // console.log('this is variable', userItem)

    // useEffect(() => {

    //     db.collection("users").doc(user?.id).collection('order').get().then((querySnapshot) => {
    //         let cardItem = []
    //         querySnapshot.forEach((doc) => {
    //             const datadb = doc.data()
    //             const ID = doc.id
    //             cardItem.push(datadb)
    //             console.log('this is user', cardItem)
    //             // console.log(doc.id, " => ", doc.data());
    //             setProductID(ID)
    //         });
    //         setUserItem(cardItem)
    //     });
    // }, [])
    useEffect(() => {

        db.collection("users").doc(user?.id).collection('order').onSnapshot((querySnapshot) => {
            let cardItem = []
            querySnapshot.forEach((doc) => {
                const datadb = doc.data()
                const ID = doc.id
                cardItem.push(datadb)
                console.log('this is user', cardItem)
                // console.log(doc.id, " => ", doc.data());
                setProductID(ID)
            });
            setUserItem(cardItem)
        });
    }, [])

    console.log(userItem)
    console.log(productID, 'this is product id')




    useEffect(() => {
        !user && history.push('/')
    }, [user])



    // console.log('this is dashboard user', user)
    // console.log(user?.email)

    return (
        <div >
            <h1>Hello</h1>
            <div>
                {userItem && userItem.length ? userItem.map(user => {
                    console.log(user.productList)
                    console.log(user)

                    return (
                        <div style={{ border: '1px solid black', marginTop: '10px', marginLeft: '20px', paddingLeft: '10px', marginBottom: '20px' }}>
                            <div >
                                <p>Name: {user.name}</p>
                                <p>Email: {user.email}</p>
                                <p>Address: {user.address}</p>
                                <p>Status: {user.status}</p>
                                <p>totalAmount: {user.totalPrice}</p>
                                <p>{user.description}</p>
                            </div>
                            <div>
                                {user.productList?.map(userProducts => {
                                    return (
                                        <>
                                            <p>Name:{userProducts.name}</p>
                                            <p>Price {userProducts.price}</p>
                                            <img src={userProducts.image} alt="" />
                                            <p>Qunatity: {userProducts.quantity}</p>
                                            <p>Description:{userProducts.description}</p>
                                        </>
                                    )
                                })}

                            </div>
                            <button onClick={() => remove(productID)} style={{ marginBottom: '10px' }}>Remove Item</button>
                        </div>




                    )
                }) : null}
            </div>
            <div>
            </div>

        </div>
    )
}

export default Dashboard
