import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import './Checkout.css'
import CheckoutRight from './CheckoutRight'

const Checkout2 = () => {
    const { cartItem, user, totalAmount } = useSelector(state => state.CartReducer)
    console.log('this is total Amount', totalAmount)
    console.log('this is checkout', cartItem)
    const dispatch = useDispatch()
    const history = useHistory()
    console.log('this is checkout user', user?.id)
    const [count, setCount] = useState(0)
    useEffect(() => {
        total()
    })
    const total = () => {
        var count1 = 0
        cartItem?.map(product2 => {
            count1 += product2.price * product2.quantity
        })
        setCount(count1)
    }
    console.log('this is checkout', cartItem)
    return (
        <div style={{ marginLeft: '20px', marginTop: '10px' }} className="checkout">
            <div className="checkout__left">
                <button style={{ marginTop: '20px', marginBottom: '20px', padding: '10px', backgroundColor: 'orange' }} onClick={() => history.push('/')}>Go To Home</button>
                <h3>Your Cart</h3>
                <h3>Your total bill is {count.toFixed(1)}</h3>
                {cartItem?.length > 0 ?
                    <>
                        {
                            cartItem.map(product1 => (
                                <div key={product1.id}>
                                    {product1.name}
                                    {product1.description}
                                    <div>
                                        <img width="300px" height="200px" src={product1.image} alt='' />
                                    </div>
                                    <button style={{ marginTop: '10px' }} onClick={() => {
                                        dispatch({ type: 'INC', payload: product1.id })
                                        // total()
                                    }} >+</button>
                                    <span>{product1.quantity}</span>
                                    <button onClick={() => {
                                        dispatch({ type: 'DEC', payload: product1.id })
                                    }} >-</button>
                                    <button onClick={() => dispatch({ type: 'REMOVE', payload: product1.id })}>Remove</button>
                                    <div style={{ marginTop: '10px' }} >
                                        total Quantity :{product1.quantity}
                                      total Price:{(product1.price * product1.quantity).toFixed(1)}
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
