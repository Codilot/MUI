import React from 'react';
import { Grid } from '@material-ui/core';
import CategoryList from './CategoryList';
import ShowItem from './ShowItem';



const Main = ({ plantsPerFamily }) => {
    return (
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="stretch"
        >
            <Grid item sm={4}>
                <CategoryList plantsPerFamily={plantsPerFamily} />
            </Grid>
            <Grid item sm={8}>
                <ShowItem />
            </Grid>
        </Grid>
    )
}

export default Main;