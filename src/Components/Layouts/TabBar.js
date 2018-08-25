import React from 'react';
import { AppBar, Tabs, Tab } from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';



 

const TabBar = () => {
    return (
        <div>
            <AppBar position="static">
                <Tabs value={0} scrollable scrollButtons="off">
                    <Tab icon={<PhoneIcon />} />
                    <Tab icon={<FavoriteIcon />} />
                    <Tab icon={<PersonPinIcon />} />
                    <Tab icon={<HelpIcon />} />
                    <Tab icon={<ShoppingBasket />} />
                    <Tab icon={<ThumbDown />} />
                    <Tab icon={<ThumbUp />} />
                </Tabs>
            </AppBar>
            
        </div>
    )
}

export default TabBar;