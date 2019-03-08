import React from 'react'
import { Link } from "react-router-dom"
import { AppBar, Toolbar, Typography } from '@material-ui/core/'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import classNames from 'classnames'

const styleSheet =  theme => {
        return {
            menuItemText: {
                color: '#fff'
            },
            menuItem: {
                textDecoration: 'none',    
                margin:'8px'
            },
            outlinedButton: {
                borderColor: "#fff",
            },
        }
    }



const NavBar = ({classes}) => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Link to="/" className={classes.menuItem}>
                       <Typography variant="headline" className={classes.menuItemText}>
                          Eves Tryout Page
                       </Typography>
                    </Link>

                    <Button  
                        component={Link}
                        to="/plant-library/"
                        className={classNames(classes.menuItemText, classes.menuItem)}
                        variant= "text"
                        size="small" 
                    >
                            Plant Library
                    </Button>
                    <Button 
                        component={Link}
                        to="/infinite-scroll/"
                        className={classNames(classes.menuItemText, classes.menuItem, classes.outlinedButton)}
                        variant="outlined" 
                        size="small" 
                    >
                       Infinite Scroll
                    </Button>
                </Toolbar>
               
            
            </AppBar>

        </div>
    )
}
export default withStyles(styleSheet)(NavBar);
