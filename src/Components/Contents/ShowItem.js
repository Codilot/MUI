import React from 'react';
import { Paper, Typography } from '@material-ui/core';

const styles = {
    Paper: {
        padding: '20px',
        margin: '10px auto',
        height: '90%'
    },
    TypographySubheading: {
        marginTop: '20px'
    }

}

const ShowItem = () => {
    return (
        <Paper style={styles.Paper} square>
            <Typography variant="display1" gutterBottom>
                Welcome to my Vegetable Library
            </Typography>
            <Typography variant="subheading">
                Please select a vegetable from the categories
            </Typography>
        </Paper>
    )
}

export default ShowItem;