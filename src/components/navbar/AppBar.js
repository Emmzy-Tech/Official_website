import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import './nav.css'
import {List, ListItemText, ListItem, ListItemIcon} from '@material-ui/core'
import { Link } from "gatsby"
import {useTheme, theme} from '@material-ui/core/styles'
import {useMediaQuery} from '@material-ui/core/useMediaQuery'
import Drawer from '../navbar/DrawerComponent/drawer'
import { Height } from '@material-ui/icons'

const useStyles= makeStyles((theme)=>({
    appBarTrans:{
        background: 'transparent',
        boxShadow: 'none',
        [theme.breakpoints.down('md')]:{
            display: 'none'
        }
    },
    
    toolBox:{
        display: 'flex',
        justifyContent: 'space-around',        
    },
}))

export default function ButtonAppBar(){
    const classes = useStyles()
    const theme = useTheme()

    //const isMatch = useMediaQuery(theme.breakpoints.down('md')) 
    return(
        <div>
        <AppBar position="fixed" className={classes.appBarTrans}>
        <div className="toolbox">
            <Toolbar className={classes.toolBox}>
                <Link to="/about">ABout</Link>
                <Link to="/about">ABout</Link>
                <Link to="/about">ABout</Link>
                <Link to="/about">ABout</Link>
            </Toolbar>
        </div>
        </AppBar>
    </div>
    )
}


