import React from 'react'
import './Product.css'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


function Product({ children }) {
    const { products } = useSelector(state => state.ProductReducer)


    console.log('products', products)
    const dispatch = useDispatch()
    return (
        <div className="product">
            {
                products.map((item) => {
                    return (
                        <div className="products">
                            <div className="product__info">
                                <p>{item.name}</p>
                                <p className="product__price">
                                    <small>$</small>
                                    <strong>{item.price}</strong>
                                </p>
                            </div>
                            <Link to={`/details/${item.id}`}>
                                <img src={item.image} alt="logo" />
                            </Link>
                            <button >{children}</button>
                        </div>

                    )
                })
            }


        </div>
    )
}

export default Product
