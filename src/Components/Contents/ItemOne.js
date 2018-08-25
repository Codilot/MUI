import React from 'react';
import { Paper } from '@material-ui/core';

const styles = {
    padding: '20px',
    margin: '10px auto'
}

const ItemOne = () => {
    return (
        <Paper style={styles}>
            <h2>item 1</h2>
        </Paper>

    )
}

export default ItemOne;