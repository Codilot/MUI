import React from 'react';
import { AppBar, Tabs, Tab } from '@material-ui/core';
import { plantfamilies} from '../../store';


const style = {
    Tab: { flexGrow: 1  },
    Tabs: { position: 'fixed',
            bottom: 0,
            width: '100%'
            }
}





const TabBar = (props) => {
    
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
                    style={style.Tabs}
                    >
                    <Tab 
                        label="All"  
                        style={style.Tab}     
                        />
                    {plantfamilies.map((family) =>
                        <Tab 
                            key={family} 
                            label={family}  
                            style={style.Tab} 
                            />
                    )}
                </Tabs>
            </AppBar>
            
        </div>
    )
}



export default TabBar;
