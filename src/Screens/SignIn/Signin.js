import React from 'react'
import { Link } from 'react-router-dom'
import './Signin.css'
const Signin = () => {
    return (
        <div className="signin">
            <form >
                <h1>SignIn</h1>
                <input type="email" placeholder="Enter Email" />
                <input type="password" placeholder="Enter Password" />
                {/* <input type="text" required/> */}
                <button type="submit" >Sign In</button>

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
