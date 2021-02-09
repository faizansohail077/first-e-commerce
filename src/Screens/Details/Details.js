import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'


import './Details.css'
const Details = () => {
    const [quantity, setQuantity] = useState(1)
    const { id } = useParams()
    const { product } = useSelector((state => state.ProductReducer))
    const dispatch = useDispatch()
    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }


    useEffect(() => {
        dispatch({ type: 'PRODUCT', id: id })
    }, [id])


    return (
        <div className="container">
            <div>

                <img src={product?.image} alt='' />
                <p>{product?.name}</p>
                <p>{product?.description}</p>
                <p>{product?.price}</p>
            </div>
            <div>
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
                <span>{quantity}</span>
                <button onClick={decrement}>-</button>
                <button onClick={() => dispatch({ type: 'ADD_TO_CART', payload: { product, quantity } })}>Add to cart</button>
            </div>
        </div>
    )
}

export default Details
