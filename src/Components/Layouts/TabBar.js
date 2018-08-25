import React from 'react';
import { AppBar, Tabs, Tab } from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';


const style = {
    Tab: { flexGrow: 1  }
}


const TabBar = () => {
    return (
        <div>
            <AppBar position="static" >
                <Tabs value={0} scrollable scrollButtons="off">
                    <Tab icon={<PhoneIcon />}  style={style.Tab} />
                    <Tab icon={<FavoriteIcon />}  style={style.Tab} />
                    <Tab icon={<PersonPinIcon />}  style={style.Tab}/>
                    <Tab icon={<HelpIcon />}  style={style.Tab}/>
                    <Tab icon={<ShoppingBasket />}  style={style.Tab}/>
                    <Tab icon={<ThumbDown />}  style={style.Tab}/>
                    <Tab icon={<ThumbUp />}  style={style.Tab} />
                </Tabs>
            </AppBar>
            
        </div>
    )
}



  export default TabBar;
