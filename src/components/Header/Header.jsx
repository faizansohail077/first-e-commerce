import React, { useEffect, useReducer } from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import swal from 'sweetalert';
import { auth } from '../../firebase'

function Header() {
    const { totalQuantities, user } = useSelector(state => state.CartReducer)
    const { products } = useSelector(state => state.CartReducer)
    const dispatch = useDispatch()

    const logout = () => {
        auth.signOut()
            .then(dispatch({ type: 'LOGOUT' }))
    }

    return (
        <nav className="header">
            <Link to="/">
                <img className="header__logo" src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/BNG_logo.svg/661px-BNG_logo.svg.png' alt='Logo' />
            </Link>
            {user ? <Link to="/dashboard">

                <button>Dashboard</button>
            </Link> : <button onClick={() => swal("Sign In Please")}>Dashboard</button>}


            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>
            <div className="header__nav">
                <div className="header__option">
                    {user && <span className="header__optionLineTwo" > hello <br /> {user ? user.name || user.email : ''}</span>}
                </div>

                {
                    user ? (<button onClick={logout}>Sign out</button>) : (<Link style={{ textDecoration: 'none', color: 'white' }} to='/signin'>
                        <div style={{ fontSize: '14px', paddingTop: '10px' }}>Sign In</div>
                    </Link>)
                }


                <Link style={{ textDecoration: 'none', color: 'white' }} to='signup'>
                    <div style={{ fontSize: '14px', paddingTop: '10px' }}>Sign Up</div>
                </Link>
                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header__optionLineTwo header__basketCount">{totalQuantities}</span>
                    </div>
                </Link>

            </div>
        </nav>
    )
}

export default Header
