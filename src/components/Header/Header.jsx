import React, { useReducer } from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';


function Header() {

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
                    <span className="header__optionLineOne">hello user</span>
                    <span className="header__optionLineTwo" > sign out </span>
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
                        <span className="header__optionLineTwo header__basketCount">0</span>
                    </div>
                </Link>

            </div>
        </nav>
    )
}

export default Header
