import React from 'react'
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core/'
import MenuIcon from '@material-ui/icons/Menu';



const NavBar = () => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="title" color="inherit">
                        This is the NavBar
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}
export default NavBar;