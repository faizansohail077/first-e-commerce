import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import db from '../../../firebase';

const HomeScreenRight = () => {
    const [homeData, setHomeData] = useState([])
    const dispatch = useDispatch()
    const { products } = useSelector(state => state.CartReducer)
    console.log('these are products', products)

    useEffect(() => {
        let data = []
        db.collection("products").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const dbData = doc.data()
                const dbID = doc.id
                data.push({
                    productId: dbID,
                    ...doc.data()
                })

            });
            dispatch({ type: 'GET__PRODUCTS', payload: data })
            setHomeData(data)
        });
    }, [])
    console.log('this is data', homeData)
    return (
        <>
            <div style={{ display: 'flex', flexWrap: 'wrap', margin: '10px', justifyContent: 'space-around' }}>
                {products.map(product => {

                    return (
                        <div >
                            <div >
                                <div>
                                    <Link to={`/details/${product.productId}`}>
                                        <img width="300px" height="200px" src={product.image} alt="" />
                                    </Link>
                                    <p>{product.name}</p>

                                </div>

                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default HomeScreenRight
