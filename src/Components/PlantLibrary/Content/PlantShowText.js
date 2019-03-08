import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
    root: {
        padding: theme.spacing.unit * 2,
        margin: theme.spacing.unit * 2,
        height: '80vh',
        '&:hover': {
            background: '#e5e5e5'
        }
    },
    typo: {
        '&:hover': {
            color: '#311B92'
        }
    }
});

const PlantShowText = ({ plant, ...props }) => {
    const { classes } = props;
    return (

        <Paper className={classes.root} square>
            <Typography variant="display1" gutterBottom className={classes.typo}>
                {plant.name}
            </Typography>
            <Typography variant="subheading">
                Soil:  {plant.soil}
            </Typography>
            <Typography variant="subheading">
                Position:  {plant.position}
            </Typography>

        </Paper>
    )
}

export default withStyles(styles)(PlantShowText);