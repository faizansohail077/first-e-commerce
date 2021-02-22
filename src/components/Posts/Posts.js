import React from 'react'
import { Link } from 'react-router-dom'

const Posts = ({ posts, loading }) => {
    if (loading) {
        return <h2>Loading.....</h2>
    }
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {posts.map(product => {
                return (
                    <div style={{ display: 'flex', flexWrap: 'wrap', margin: '10px' }} >
                        <div >
                            <div>
                                <Link to={`/details/${product.productId}`}>
                                    <img width="300px" height="200px" src={product.image} alt="" />
                                </Link>
                                <p>{product.name}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Posts
