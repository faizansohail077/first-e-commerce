import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { auth, provider } from '../../firebase'
import './Signin.css'
const Signin = () => {
    const { user } = useSelector(state => state.CartReducer)

    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    const dispatch = useDispatch()

    const signIn = (e) => {
        e.preventDefault()
        auth.signInWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
            .then((authUser) => {
                console.log(authUser, 'signin')
            }).catch((err) => {
                alert(err.message)
            })
    }

    const signInWithGoogle = (e) => {
        e.preventDefault()
        auth.signInWithPopup(provider)
    }
    return (
        <div className="signin">
            <form >
                <h1>SignIn</h1>
                <input ref={emailRef} type="email" placeholder="Enter Email" />
                <input ref={passwordRef} type="password" placeholder="Enter Password" />
                <button type="submit" onClick={signIn} >Sign In</button>
                <button type="submit" style={{ marginTop: '5px' }} onClick={signInWithGoogle} >Sign In with google</button>
                <h5 style={{ paddingTop: '10px' }}>
                    Don't Have an Account?
                    <Link to='/signup'>
                        <span className="signUp" >Sign Up now</span>
                    </Link>
                </h5>
            </form>
        </div>
    )
}

export default Signin
