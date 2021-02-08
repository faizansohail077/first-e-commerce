import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header() {

    return (
        <nav className="header">
            <img className="header__logo" src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/BNG_logo.svg/661px-BNG_logo.svg.png' alt='Logo' />
            
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>
            <div className="header__nav">
                <a href="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">hello user</span>
                        <span className="header__optionLineTwo" > sign out </span>
                    </div>
                </a>
                <a href="/" className="header__link">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header__optionLineTwo header__basketCount">0</span>
                    </div>
                </a>

            </div>
        </nav>
    )
}

export default Header
