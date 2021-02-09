import React, { useEffect } from 'react'
import './Home.css'
import logo from '../../components/images/bg.jpg'


import HomeScreenLeft from './components/HomeScreenLeft'
import HomeScreenRight from './components/HomeScreenRight'
import { store } from '../../app/store'

function Home() {
    
    return (
        <div className="home">
            <img className="home__image" src={logo} alt="car" />
            <div className="homepage__content">
                <div className="homepage__left">
                    <HomeScreenLeft />
                </div>
                <div className="homepage__right">
                    <HomeScreenRight />
                </div>

            </div>
        </div>
    )
}

export default Home
