import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './Checkout.css'
import CheckoutRight from './CheckoutRight'

const Checkout2 = () => {
    const { products, user, totalAmount } = useSelector(state => state.CartReducer)
    console.log('this is total Amount', totalAmount)
    console.log('this is checkout', products)
    const dispatch = useDispatch()
    console.log('this is checkout user', user?.id)
    const [count, setCount] = useState(0)
    useEffect(() => {
        total()
    }, [products])
    const total = () => {
        var count1 = 0
        products?.map(product => {
            count1 += product.price * product.quantity
        })
        setCount(count1)
    }


    return (
        <div className="checkout">
            <div className="checkout__left">
                <h3>Your Cart</h3>
                <h3>Your total bill is {count.toFixed(1)}</h3>
                {products?.length > 0 ?
                    <>
                        {
                            products.map(product => (
                                <div key={product.id}>
                                    {product.name}
                                    {product.description}
                                    <div>
                                        <img src={product.image} alt='' />

                                    </div>
                                    <button onClick={() => {

                                        dispatch({ type: 'INC', payload: product.id })
                                        total()
                                    }} >+</button>
                                    <span>{product.quantity}</span>
                                    <button onClick={() => {
                                        dispatch({ type: 'DEC', payload: product.id })
                                        total()
                                    }} >-</button>
                                    <button onClick={() => dispatch({ type: 'REMOVE', payload: product.id })}>Remove</button>

                                    <div>
                                        total Quantity :{product.quantity}
                                      total Price:{(product.price * product.quantity).toFixed(1)}
                                    </div>
                                </div>
                            ))
                        }

                    </>
                    :
                    'include product'}
                <div>

                </div>


            </div>
            <CheckoutRight />
        </div>
    )
}

export default Checkout2
