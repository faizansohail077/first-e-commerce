import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase'
import './Signin.css'
const Signin = () => {
    const emailRef = useRef(null)
    const passwordRef = useRef(null)


    const signIn = (e) => {
        e.preventDefault()
        auth.signInWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
            .then((authUser) => {
                console.log(authUser, 'signin')
            }).catch((err) => {
                alert(err.message)
            })
    }
    return (
        <div className="signin">
            <form >
                <h1>SignIn</h1>
                <input ref={emailRef} type="email" placeholder="Enter Email" />
                <input ref={passwordRef} type="password" placeholder="Enter Password" />
                <button type="submit" onClick={signIn} >Sign In</button>

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
