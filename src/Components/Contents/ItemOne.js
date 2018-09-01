import React, { Fragment } from 'react';
import { Paper, Typography, List, ListItem, ListItemText } from '@material-ui/core';


const styles = {
  padding: '20px',
  margin: '10px auto'
}



const ItemOne = ({plantsPerFamily}) => {
  return (
    <Paper style={styles}>

      <h2>Categories</h2>

      {plantsPerFamily.map(([family, plants]) =>
        <Fragment>
        
          <Typography
            variant="headline">
            {family}
          </Typography>

          <List component="ul"> 
            {plants.map(({name}) => 
              <ListItem button>
                <ListItemText primary={name} />
              </ListItem>
            )}
          </List>

        </Fragment>
      )}

    </Paper>

  )
}

export default ItemOne;