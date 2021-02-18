import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import db from '../../firebase'

import './Details.css'
const Details = () => {
    const [quantity, setQuantity] = useState(0)
    const [data, setData] = useState({})
    const { id } = useParams()
    const history = useHistory()
    console.log('this is id', id)
    const { product } = useSelector((state => state.CartReducer))
    console.log('this is details products', product)
    const dispatch = useDispatch()
    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)

        }
    }

    const addtocart = () => {
        dispatch({ type: 'ADD_TO_CART', payload: { product, quantity } })
        dispatch({ type: 'INC', payload: product?.id })

    }

    useEffect(() => {
        db.collection('products').doc(id).get().then((doc) => {
            if (doc) {
                const detailDb = doc.data()
                console.log("Document data:", detailDb);
                setData(detailDb)
                dispatch({ type: 'GET__PRODUCT', payload: detailDb })

            } else {
                console.log("No such document!");
            }
        })
    }, [])
    console.log('this is details products', product)

    return (
        <div style={{ marginTop: '20px' }} className="container">
            <div>
                <img width="300px" height="200px" src={product?.image} alt='' />
                <p>{product?.name}</p>
                <p>{product?.description}</p>
                <p>{product?.price}</p>

                <div>

                    <button onClick={addtocart}>Add to cart</button>
                </div>
            </div>

            <div>
                <button style={{ marginTop: '50px', padding: '10px', backgroundColor: 'orange' }} onClick={() => history.push('/checkout')} >Go To Checkout</button>
                <button style={{ marginTop: '50px', padding: '13px', backgroundColor: 'orange' }} onClick={() => history.push('/')} >Go To Home</button>
            </div>

        </div>
    )
}

export default Details
