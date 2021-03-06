import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import db from '../../firebase'
import { useHistory } from 'react-router-dom'
import swal from 'sweetalert';



const CheckoutRight = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState()
    const [address, setAddress] = useState('')
    const [payment, setPayment] = useState('')
    const [orderType, setOrderType] = useState('')
    const history = useHistory()
    const { cartItem, user } = useSelector(state => state.CartReducer)
    console.log('this is products', cartItem)
    const dispatch = useDispatch()
    const [count, setCount] = useState(0)
    const [error, setError] = useState('')
    const [nameError, setNameError] = useState('')
    const [numberError, setNumberError] = useState('')
    const [paymentError, setPaymentError] = useState('')
    const [orderTypeError, setOrderTypeError] = useState('')
    console.log('aaaaaaaaaa', orderTypeError)
    useEffect(() => {
        total()
    })
    const total = () => {
        var count1 = 0
        cartItem?.map(product => {
            count1 += product.price * product.quantity
        })
        setCount(count1)
    }

    const first = (e) => {
        firstName?.trim()
        setFirstName(e.target.value)
    }
    const last = (e) => {
        lastName.trim()
        setLastName(e.target.value)
    }
    console.log('this is first name', firstName)

    const save = (e) => {
        e.preventDefault()
        if (!cartItem.length) {
            return alert('Add Item To Proceed')
        }
        let fName = firstName.trim()
        if (!fName) {
            setTimeout(() => {
                setNameError('')
            }, 3000)
            return setNameError('Enter Valid Name')
        }
        let lName = lastName.trim()
        if (!lName) {
            setTimeout(() => {
                setNameError('')
            }, 3000)
            return setNameError('Enter Valid Name')
        }
        if (!number || number.length < 10) {
            setTimeout(() => {
                setNumberError('')
            }, 3000)
            return setNumberError('Invalid or less number')
        }

        if (!payment) {
            return setPaymentError('Enter Payment Type')
        }

        if (!orderType) {
            return setOrderTypeError('Select Order type')
        }
        else {
            db.collection('users').doc(user?.id).collection('order').doc().set({
                productList: cartItem,
                name: firstName + ' ' + lastName,
                number: number,
                email: email,
                address: address,
                paymentMethod: payment,
                orderType: orderType,
                status: 'pending',
                totalPrice: count
            })
            dispatch({ type: "EMPTY_PRODUCTS" })
            setFirstName('')
            setLastName('')
            setEmail('')
            setNumber('')
            setAddress('')
            setPayment('')
            setOrderType('')
            setError('')
            setPaymentError('')
            setOrderTypeError('Select Order type')
            setTimeout(() => {
                swal({
                    title: "Good job!",
                    text: "You Form Is Submitted ",
                    icon: "success",
                    button: "Aww yiss!",
                });
            }, 1000)
        }
        setTimeout(() => {
            history.push('/dashboard')
        }, 1500)
    }
    return (
        <>
            <div className="checkout__right">
                <div className="row">
                    <div className="col-md-8 order-md-1">
                        <h4 className="mb-3">Billing address</h4>
                        <form onSubmit={save} className="needs-validation" novalidate>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="firstName">First name</label>
                                    <input value={firstName} onChange={first} type="text" className="form-control" id="firstName" placeholder="" required />
                                    <p style={{ marginTop: '10px', color: 'red' }}>{nameError}</p>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="lastName">Last name</label>
                                    <input value={lastName} onChange={last} type="text" className="form-control" id="lastName" placeholder="" required />
                                    <p style={{ marginTop: '10px', color: 'red' }}>{nameError}</p>

                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email">Number <span className="text-muted"></span></label>
                                <input value={number} min="11" onChange={(e) => setNumber(e.target.value)} type="number" className="form-control" id="email" placeholder="Enter Your Mobile Number" required />
                                <p style={{ marginTop: '10px', color: 'red' }}>{numberError}</p>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="email">Email <span className="text-muted"></span></label>
                                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="email" placeholder="you@example.com" required />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="address">Address</label>
                                <input value={address} onChange={(e) => setAddress(e.target.value)} type="text" className="form-control" id="address" placeholder="1234 Main St" required />
                            </div>

                            <hr className="mb-4" />

                            <hr className="mb-4" />

                            <h4 className="mb-3">Payment</h4>

                            <div className="d-block my-3">
                                <div className="custom-control custom-radio">
                                    <input id="credit" onClick={() => setPayment('Credit Card')} name="paymentMethod" type="radio" className="custom-control-input" required />
                                    <label className="custom-control-label" htmlFor="credit">Credit card</label>
                                </div>
                                <div className="custom-control custom-radio">
                                    <input id="debit" onClick={() => setPayment('Debit Card')} name="paymentMethod" type="radio" className="custom-control-input" required />
                                    <label className="custom-control-label" htmlFor="debit">Debit card</label>
                                </div>
                                <div className="custom-control custom-radio">
                                    <input id="paypal" onClick={() => setPayment('Cash On Delivery')} name="paymentMethod" type="radio" className="custom-control-input" required />
                                    <label className="custom-control-label" htmlFor="paypal">COD</label>
                                </div>
                                <p>{paymentError}</p>
                                <div>

                                </div>

                            </div>

                            <div class="form-check">
                                <input name="checkbox" onClick={() => setOrderType('Order')} class="form-check-input" type="radio" id="flexCheckChecked" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    Order
                        </label>
                            </div>
                            <div class="form-check">
                                <input name="checkbox" onClick={() => setOrderType('Subscription')} class="form-check-input" type="radio" id="flexCheckChecked" />
                                <label class="form-check-label" >
                                    Subscription
                        </label>
                                <p>{orderTypeError}</p>
                            </div>




                            <hr className="mb-4" />

                            {user ? (
                                <button type="submit" className="btn btn-primary btn-lg btn-block" type="submit">Continue to checkout</button>) :
                                <button onClick={() => alert('Sign In To Proceed')} className="btn btn-primary btn-lg btn-block" type="submit">Continue to checkout</button>
                            }
                            {/* */}
                        </form>
                    </div>
                </div>

            </div>

        </>
    )
}

export default CheckoutRight
// const findItem = (productId) => userItem.filter((item) => item.id !== productId)
// const remove = (id) => {
//     let cart = findItem(id)
//     console.log('carts ', cart)
//     db.collection('users').doc(user?.id).collection('items').doc('itemList').set({
//         cart
//     })
// }
