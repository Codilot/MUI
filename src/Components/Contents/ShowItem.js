import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';



const styles = theme => ({
    root: {
      padding: theme.spacing.unit * 2,
      margin: theme.spacing.unit * 2,
      height: '80vh',
      '&:hover': {
        background: '#edf6e9'
      }
    },
    typo: {
        '&:hover': {
            color: '#088da5'
           }
    }
  });

const ShowItem = (props) => {
    const { classes } = props;
    return (
        <Paper className={classes.root} square>
            <Typography variant="display1" gutterBottom className={classes.typo}>
                Welcome to my Vegetable Library
            </Typography>
            <Typography variant="subheading">
                Please select a vegetable from the categories
            </Typography>
        </Paper>
    )
}

export default withStyles(styles)(ShowItem);