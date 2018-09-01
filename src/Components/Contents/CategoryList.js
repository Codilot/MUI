import React from 'react';
import { Typography, List, ListItem, ListItemText } from '@material-ui/core';


const styles = {
  padding: '20px',
  margin: '10px auto'
}

const CategoryList = ({plantsPerFamily, catValue}) => {

  let plantsToRender = plantsPerFamily.filter(i => i[0] === catValue)
  if (plantsToRender.length === 0) {
    plantsToRender = plantsPerFamily;
  } 
 

  return (
    <div style={styles}>

      <h2>Categories</h2>


      {plantsToRender.map(([family, plants]) =>
        <div key={family}>

          <Typography variant="headline">
            {family}
          </Typography>

          <List component="ul"> 
            {plants.map(({name, id}) => 
              <ListItem key={id} button>
                <ListItemText primary={name} />
              </ListItem>
            )}
          </List>

        </div>
      )}

    </div>

  )
}

export default CategoryList;