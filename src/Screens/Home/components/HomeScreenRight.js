import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Pagination from '../../../components/Pagination.js/Pagination';
import Posts from '../../../components/Posts/Posts';
import db from '../../../firebase';

const HomeScreenRight = () => {
    const [posts, setPost] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(5)
    const [homeData, setHomeData] = useState([])
    const dispatch = useDispatch()
    const { product, products } = useSelector(state => state.CartReducer)
    const [getMore, setGetMore] = useState([])
    const [documnet, setDocument] = useState()
    const [values, setValues] = useState([])
    const [values2, setValues2] = useState([])
    const [count, setCounts] = useState()
    console.log('these are products', product)
    let data = []
    useEffect(() => {
        db.collection("products").orderBy("id", "asc").get().then((querySnapshot) => {
            console.log('this is size', querySnapshot.docs.length)
            setCounts(querySnapshot.size)
        })
    }, [])

    console.log('this is size count', count)
    useEffect(() => {
        db.collection("products").orderBy("id", "asc").limit(5).get().then((querySnapshot) => {
            var lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
            console.log('this is querySnapshot', lastVisible.data())
            // setValues(lastVisible)
            querySnapshot.forEach((doc) => {
                const dbData = doc.data()
                const dbID = doc.id
                data.push({
                    productId: dbID,
                    ...doc.data()
                })
            });
            dispatch({ type: 'GET__PRODUCTS', payload: data })
        });
    }, [])

    const paginate = (number) => {
        let data = []
        db.collection('products').orderBy("id", "asc").where('id', '>', number).limit(5).get().then(querySnapshot => {
            querySnapshot.forEach(documentSnapshot => {
                querySnapshot.docs.map(doc => {
                    const dbID = doc.id
                    data.push({
                        productId: dbID,
                        ...doc.data()
                    })
                });
            });
            dispatch({ type: 'GET__PRODUCTS', payload: data })
        });
    }
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost);
    // const paginate = pageNumber => setCurrentPage(pageNumber);


    return (
        <>
            {/* <div style={{ display: 'flex', flexWrap: 'wrap' }} >
                {product ? product.map(products => {
                    return (
                        <div style={{ display: 'flex', flexWrap: 'wrap', margin: '10px' }} >
                            <div >
                                <div>
                                    <Link to={`/details/${products.productId}`}>
                                        <img width="300px" height="200px" src={products.image} alt="" />
                                    </Link>
                                    <p>{products.name}</p>
                                </div>
                            </div>
                        </div>
                    )
                }) : ''}
            </div> */}

            <Posts posts={currentPosts} loading={loading} />
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                {/* <button onClick={() => paginate(5)}>1</button>
                <button onClick={() => paginate(10)}>2</button>
                <button onClick={() => paginate(15)}>3</button>
                <button onClick={() => paginate(20)}>4</button>
                <button onClick={() => paginate(25)}>5</button>
                <button onClick={() => paginate(30)}>6</button> */}
            </div>
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={count}
                onClick={(number) => paginate(number * 5)}
            />

        </>
    )
}

export default HomeScreenRight
