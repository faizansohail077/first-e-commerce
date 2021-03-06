import React, { useRef } from 'react'
import { useHistory } from 'react-router-dom'
import { auth } from '../../firebase'

const Signin = () => {
    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    const history = useHistory()


    const register = (e) => {
        e.preventDefault()
        auth.createUserWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
            .then((authUser) => {
                history.push('/')
            }).catch(err => {
                alert(err.message)
            })


    }

    return (
        <div className="signin">
            <form >
                <h1>SignUp</h1>
                <input ref={emailRef} type="email" placeholder="Enter Email" />
                <input ref={passwordRef} type="password" placeholder="Enter Password" />
                <button type="submit" onClick={register} >Sign Up</button>


            </form>
        </div>
    )
}

export default Signin
