import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import db from '../../../firebase';
// import Product from '../../../components/Product/Product'


const HomeScreenRight = () => {
    const [homeData, setHomeData] = useState([])
    const [homeDataID, setHomeDataID] = useState()
    const dispatch = useDispatch()
    const { products } = useSelector(state => state.CartReducer)
    console.log('these are products', products)
    // console.log('these are products', products[].productId)


    useEffect(() => {
        let data = []
        db.collection("products").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const dbData = doc.data()
                const dbID = doc.id
                data.push({
                    productId: dbID,
                    ...doc.data()
                })
                // console.log('this is db', dataID)
                // console.log(doc.id, " => ", doc.data());
            });
            dispatch({ type: 'GET__PRODUCTS', payload: data })
            setHomeData(data)
        });
    }, [])
    console.log('this is data', homeData)
    return (
        <>
            {products.map(product => {

                return (
                    <div style={{ display: 'flex' }}>
                        <div >
                            <div>
                                <Link to={`/details/${product.productId}`}>
                                    <img src={product.image} alt="" />
                                </Link>
                                <p>{product.name}</p>
                                {/* <p>{product.productId}</p> */}

                            </div>

                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default HomeScreenRight
{/* <div>
<div className="home__row">
    <Product key={''} />
</div>

</div> */}