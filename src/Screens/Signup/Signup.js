import React from 'react'

const Signin = () => {
    return (
        <div className="signin">
            <form >
                <h1>SignUp</h1>
                <input type="email" placeholder="Enter Email" />
                <input type="number" placeholder="Enter Number" />
                <input type="password" placeholder="Enter Password" />
                <button type="submit" >Sign Up</button>


            </form>
        </div>
    )
}

export default Signin
