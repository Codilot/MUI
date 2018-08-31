import React from 'react';
import { AppBar, Tabs, Tab } from '@material-ui/core';
import { plantFamilies} from '../../store';


const style = {
    Tab: { flexGrow: 1  }
}


const TabBar = () => {
    return (
        <div>
            <AppBar position="static" >
                <Tabs plantFamilies={plantFamilies} value={0} scrollable scrollButtons="off">
                    {plantFamilies.map(group =>
                        <Tab label={group}  style={style.Tab} />
                    )}
                </Tabs>
            </AppBar>
            
        </div>
    )
}



  export default TabBar;
