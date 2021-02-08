import React from 'react'
import './Product.css'
import { useSelector } from 'react-redux'

function Product({ children }) {
    const { product } = useSelector(state => state.ProductReducer)
    console.log('ssss', product)

    return (
        <div className="product">
            {
                product.map((item) => {
                    return (
                        <div className="products">
                            <div className="product__info">
                                <p>{item.name}</p>
                                <p className="product__price">
                                    <small>$</small>
                                    <strong>{item.price}</strong>
                                </p>
                            </div>
                            <img src={item.image} alt="logo" />
                            <button >{children}</button>
                        </div>

                    )
                })
            }


        </div>
    )
}

export default Product
