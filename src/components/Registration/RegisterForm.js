import React from 'react'
import reg from './reg.css'
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles'
import { Typography, responsiveFontSizes, createMuiTheme, ThemeProvider, MuiThemeProvider  } from '@material-ui/core';
import { colors, Grow, useMediaQuery, useTheme} from "@material-ui/core"
import { Link } from "gatsby"
import back from '../../images/arrow-back.png'

const useStyles= makeStyles((theme)=>({
    
 
}))


function RegisterForm() {
    const classes = useStyles()

    return (
        <div className="reg-wrapper">
            <Grid container>
                <Grid item xs={12} className="go-back-link"><Link to="/register" className="link-back">Back<img src={back} /></Link></Grid>
            </Grid>
        </div>
    )
}

export default RegisterForm
