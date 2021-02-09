import React, { useEffect, useReducer } from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { auth } from '../../firebase'

function Header() {
    const { totalQuantities } = useSelector(state => state.CartReducer)
    const { products } = useSelector(state => state.CartReducer)
    const {user} = useSelector(state => state.loginReducer)
    console.log('aaaaaaaaaaaaaaaaaaaaa', user)
    const dispatch = useDispatch()
    useEffect(()=>{
        console.log('=========',user)
    },[user])


    const logout = () => {
        auth.signOut()
            .then(alert('you are signed out'))
            .then(dispatch({type:'LOGOUT'}))
    }

    return (
        <nav className="header">
            <Link to="/">
                <img className="header__logo" src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/BNG_logo.svg/661px-BNG_logo.svg.png' alt='Logo' />
            </Link>
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>
            <div className="header__nav">
                <div className="header__option">
                    <span className="header__optionLineOne">hello {user?.email}</span>
                    <span className="header__optionLineTwo" onClick={logout}> sign out </span>
                </div>
                <Link style={{ textDecoration: 'none', color: 'white' }} to='/signin'>
                    <div style={{ fontSize: '14px', paddingTop: '10px' }}>Sign In</div>
                </Link>
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
