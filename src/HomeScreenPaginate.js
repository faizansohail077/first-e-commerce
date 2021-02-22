import React, { useState } from 'react';
import Grid from "@material-ui/core/Grid";
import { usePagination } from "use-pagination-firestore";
import {
    NavigateNext as NavgateNextIcon,
    NavigateBefore as NavigateBeforeIcon
} from '@material-ui/icons';
import { IconButton } from "@material-ui/core";
import db from './firebase';
import Posts from './components/Posts/Posts';
import { useSelector } from 'react-redux';

const RecentPerfumes = () => {
    const { products } = useSelector(state => state.CartReducer)
    const [getData, setData] = useState([])
    const { items, isLoading, isStart, isEnd, getPrev, getNext, } = usePagination(
        db.collection("products").orderBy("id", "desc").limit(5).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                let data = []
                const dbData = doc.data()
                const dbID = doc.id
                data.push({
                    productId: dbID,
                    ...doc.data()
                })
                setData(data)
            });
        })

    );

    if (isLoading) {
        return <h1>Loading</h1>
    }

    return (
        <Grid container>
            <Grid item xs={12}>
                <Grid container justify="flex-end">
                    <Grid item>
                        <IconButton onClick={getPrev} disabled={isStart}>
                            <NavigateBeforeIcon />
                        </IconButton>
                        <IconButton onClick={getNext} disabled={isEnd}>
                            <NavgateNextIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            </Grid>
            {products.map((perfume, idx) => {
                return (
                    <Grid item xs={12} sm={12} md={6} lg={6} key={`recent-perfume-${idx}`}>
                        <Posts posts={perfume} />
                    </Grid>
                );
            })}
        </Grid>
    );
}

export default RecentPerfumes;