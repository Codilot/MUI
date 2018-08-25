import React from 'react';
import { Grid } from '@material-ui/core';

const Main = () => {
    return (
        <Grid container>
            <Grid item sm={4}>
                item 1
            </Grid>
            <Grid item sm={4}>
                item 2
            </Grid>
            <Grid item sm={4}>
                item 3
            </Grid>
        </Grid>
    )
}

export default Main;