import React from 'react';
import { Grid } from '@material-ui/core';
import ItemOne from './ItemOne';
import ItemTwo from './ItemTwo';
import ItemThree from './ItemThree';



const Main = () => {
    return (
        <Grid container>
            <Grid item sm={4}>
                <ItemOne /> 
            </Grid>
            <Grid item sm={4}>
                <ItemTwo />
            </Grid>
            <Grid item sm={4}>
                <ItemThree />
            </Grid>
        </Grid>
    )
}

export default Main;