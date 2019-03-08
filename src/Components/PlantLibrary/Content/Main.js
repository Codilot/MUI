import React from 'react';
import { Grid } from '@material-ui/core';
import CategoryList from './CategoryList';
import ShowItem from './ShowItem';



const Main = ({ 
    plantsPerFamily, 
    catValue, 
    plant,
    onSelect
    }) => {
    return (
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="flex-start"
        >
            <Grid item sm={4}>
                <CategoryList 
                    plantsPerFamily={plantsPerFamily} 
                    catValue={catValue}
                    onSelect={onSelect}
                    />
            </Grid>
            <Grid item sm={8}>
                <ShowItem plant={plant} />
            </Grid>
        </Grid>
    )
}

export default Main;