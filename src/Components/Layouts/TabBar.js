import React from 'react';
import { AppBar, Tabs, Tab } from '@material-ui/core';
import { plantfamilies} from '../../store';


const style = {
    Tab: { flexGrow: 1  }
}


const TabBar = () => {
    return (
        <div>
            <AppBar position="static" >
                <Tabs plantfamilies={plantfamilies} value={0} scrollable scrollButtons="off">
                    <Tab label="All"  style={style.Tab} />
                    {plantfamilies.map(group =>
                        <Tab label={group}  style={style.Tab} />
                    )}
                </Tabs>
            </AppBar>
            
        </div>
    )
}



export default TabBar;
