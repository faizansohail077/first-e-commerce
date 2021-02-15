import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import db from '../../firebase'

const CheckoutRight = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState(0)
    const [address, setAddress] = useState('')
    const [payment, setPayment] = useState('')
    const [orderType, setOrderType] = useState('')
    const { products, user } = useSelector(state => state.CartReducer)
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



    const save = (e) => {
        e.preventDefault()
        db.collection('users').doc(user?.id).collection('order').doc().set({
            productList: products,
            name: firstName + lastName,
            number: number,
            email: email,
            address: address,
            paymentMethod: payment,
            orderType: orderType,
            status: 'pending',
            totalPrice: count
        })
        setFirstName('')
        setLastName('')
        setEmail('')
        setNumber('')
        setAddress('')
        setPayment('')
        setOrderType('')

    }
    return (
        <>
            <div className="checkout__right">
                <div className="row">
                    <div className="col-md-8 order-md-1">
                        <h4 className="mb-3">Billing address</h4>
                        <form className="needs-validation" novalidate>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="firstName">First name</label>
                                    <input value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" className="form-control" id="firstName" placeholder="" required />
                                    <div className="invalid-feedback">
                                        Valid first name is required.
                            </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="lastName">Last name</label>
                                    <input value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" className="form-control" id="lastName" placeholder="" required />
                                    <div className="invalid-feedback">
                                        Valid last name is required.
                                </div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email">Number <span className="text-muted"></span></label>
                                <input value={number} onChange={(e) => setNumber(e.target.value)} type="number" className="form-control" id="email" required placeholder="Enter Your Mobile Number" />
                                <div className="invalid-feedback">
                                    Please enter a valid Number for shipping updates.
                            </div>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="email">Email <span className="text-muted"></span></label>
                                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="email" required placeholder="you@example.com" />
                                <div className="invalid-feedback">
                                    Please enter a valid email address for shipping updates.
                            </div>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="address">Address</label>
                                <input value={address} onChange={(e) => setAddress(e.target.value)} type="text" className="form-control" id="address" placeholder="1234 Main St" required />
                                <div className="invalid-feedback">
                                    Please enter your shipping address.
        </div>
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
                                <div>

                                </div>

                            </div>

                            <div class="form-check">
                                <input onClick={() => setOrderType('Order')} class="form-check-input" type="checkbox" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    Order
                          </label>
                            </div>
                            <div class="form-check">
                                <input onClick={() => setOrderType('Subscription')} class="form-check-input" type="checkbox" id="flexCheckChecked" />
                                <label class="form-check-label" for="flexCheckChecked">
                                    Subscription
                        </label>
                            </div>

                            {/* <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="cc-name">Name on card</label>
                                    <input type="text" className="form-control" id="cc-name" placeholder="" required />
                                    <small className="text-muted">Full name as displayed on card</small>
                                    <div className="invalid-feedback">
                                        Name on card is required
                               </div>
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label htmlFor="cc-number">Credit card number</label>
                                    <input type="text" className="form-control" id="cc-number" placeholder="" required />
                                    <div className="invalid-feedback">
                                        Credit card number is required
            </div>
                                </div>
                            </div> */}

                            <hr className="mb-4" />

                            {user ? (
                                <button onClick={save} className="btn btn-primary btn-lg btn-block" type="submit">Continue to checkout</button>) :
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
