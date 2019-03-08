import React from 'react';
import { AppBar, Tabs, Tab } from '@material-ui/core';
import { plantfamilies} from '../../../store';
import { withStyles } from '@material-ui/core/styles';


const styles = {
    tab: { 
            flexGrow: 1,
            '&:hover': {
                color: '#311B92'
               }
        },
    tabs: { position: 'fixed',
            bottom: 0,
            width: '100%'
            }
}





const TabBar = (props) => {
    const { classes } = props;
    return (
        <div>
            <AppBar 
                position="static"
                color="default"
                >
                <Tabs 
                    plantfamilies={plantfamilies} 
                    value={props.category}
                    onChange={props.onSelect}
                    indicatorColor="primary"
                    textColor="primary" 
                    scrollable
                    scrollButtons="auto"
                    className={classes.tabs}
                    >
                    <Tab 
                        label="All"  
                        className={classes.tab}   
                        />
                    {plantfamilies.map((family) =>
                        <Tab 
                            key={family} 
                            label={family}  
                            className={classes.tab}    
                            />
                    )}
                </Tabs>
            </AppBar>
            
        </div>
    )
}



export default withStyles(styles)(TabBar);
