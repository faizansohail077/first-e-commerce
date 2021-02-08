import React from 'react'
import './Product.css'

function Product({  title, price,  image ,children}) {

    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>             
            </div>
            <img src={image} alt="logo" />
            <button >{children}</button>
        </div>
    )
}

export default Product
