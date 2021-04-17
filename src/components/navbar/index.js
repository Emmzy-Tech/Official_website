import * as React from "react"
import PropTypes, { objectOf } from "prop-types"
import { Link } from "gatsby"
import './nav.css'
import '../Layout.css'
import logo from '../../images/logo.svg'
import { colors, Grow } from "@material-ui/core";
import { useState, useEffect } from 'react'
import { fade, makeStyles, useStyles } from '@material-ui/core/styles';
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





const Header = ({ siteTitle }) => {
    return(
      <header>
          <AppBar position="sticky">
            <Toolbar>
            <IconButton aria-label="app" color="inherent">
            <Menu style={{color: 'white'}}/>
            </IconButton>
            <Typography variant="h6" style={{flexGrow: 1}}>Capacity</Typography>
            <Button color="inherit">About Us</Button>
            <Button color="inherit">Courses</Button>
            <Button color="inherit">Contact us</Button>
            </Toolbar>
          </AppBar>
      </header>
    )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
