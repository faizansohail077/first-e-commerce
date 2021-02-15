import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import db from '../../firebase'

const Dashboard = () => {
    const { user } = useSelector(state => state.CartReducer)
    const [quantity, setQuantity] = useState(1)
    const { product } = useSelector((state => state.ProductReducer))
    console.log('this is product', product)
    const dispatch = useDispatch()
    const [userItem, setUserItem] = useState([])
    const history = useHistory()
    const findItem = (productId) => userItem.filter((item) => item.id !== productId)

    let orderRef = db.collection('users').doc(user?.id).collection('items').doc().id
    // let doc_id = orderRef.doc().id
    console.log(orderRef, 'id')

    useEffect(() => {
        const database = db.collection('users').doc(user?.id).collection('items').doc('itemList').onSnapshot((doc) => {
            if (doc.exists) {
                console.log("Document data:", doc.data().cart);
                const dataDb = doc.data().cart
                setUserItem(dataDb)
                console.log(dataDb, 'data')
            } else {
                console.log("No such document!");
            }
        })
    }, []);
    console.log('this is variable', userItem)

    useEffect(() => {
        !user && history.push('/')
    }, [user])
    // useEffect(() => {
    //     const car = db.collection('users').doc(user?.id).collection("items").doc('eJ9BvgEozAkB5PrDbqkh')
    // console.log('this is car', car)

    // })
    const remove = (id) => {
        let cart = findItem(id)
        console.log('carts ', cart)
        db.collection('users').doc(user?.id).collection('items').doc('itemList').set({
            cart
        })
    }

    console.log('this is dashboard user', user)
    console.log(user?.email)

    return (
        <div>
            <h1>Hello</h1>
            { userItem && userItem.length ? userItem.map(user => {
                return (
                    <>
                        <div style={{ border: '1px solid black' }}>
                            <p>{user.name}</p>
                            <img src={user.image} alt='' />
                            <p>{user.price}</p>
                            <p>{user.quantity}</p>

                            <p>{user.description}</p>
                            <button onClick={() => remove(user.id)} style={{ marginBottom: '10px' }}>Remove Item</button>
                            <button onClick={() => dispatch({ type: 'ADD_TO_CART', payload: { product, quantity } })}>Add to cart</button>

                        </div>

                    </>

                )
            }) : null}
        </div>
    )
}

export default Dashboard
