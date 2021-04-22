import * as React from "react"
import PropTypes, { objectOf } from "prop-types"
import { Link } from "gatsby"
import './nav.css'
import '../Layout.css'
import logo from '../../images/logo.svg'
import { useState, useEffect } from 'react'
import { fade, makeStyles, useStyles, ThemeProvider, theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/icons/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { red } from "@material-ui/core/colors"
import DrawerNav from './DrawerComponent/drawer'
import Switch from '@material-ui/core/Switch';
import { colors, Grow, useMediaQuery, useTheme } from "@material-ui/core";
//import {darkTheme, lightTheme} from '../../components/theme'
// const drawerWidth = 240
// const style = theme=>({ 
//   drawer:{
//     width: drawerWidth
//   } 
// })

const Header = ({ siteTitle }) => {

  const theme = useTheme()
  const isMatch = useMediaQuery(theme.breakpoints.down('xs'))
  
  const [themeState, setThemeState] = useState('dark')
  // General theme toggler
  const themeToggler =()=>{
    theme === "light" ? setThemeState('dark') : setThemeState('light')
  }
    return(
      
          <>
          <AppBar position="sticky" >
            <Toolbar>
            <Typography variant="h6" style={{flexGrow: 1}}>CapacityBay</Typography>
            {isMatch ? (<DrawerNav open={false} />) : (
              <>
              <Button color="inherit">About Us</Button>
              <Button color="inherit">Courses</Button>
              <Button color="inherit">Programs</Button>
              <Button color="inherit">Resources</Button>
              <Button color="inherit">IT Jobs</Button>
              </>
            )}

              <Switch name="checkedA" inputProps={{ 'aria-label': 'secondary checkbox' }}/>            
            </Toolbar>
            
          </AppBar>
         
    
    
      </>
    )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
