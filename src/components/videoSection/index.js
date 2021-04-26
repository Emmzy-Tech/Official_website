import React from 'react'
import Grid from '@material-ui/core/Grid'
import {makeStyles} from '@material-ui/core/styles'
import { Typography, responsiveFontSizes, createMuiTheme, ThemeProvider, MuiThemeProvider  } from '@material-ui/core';
import byc from '../../images/icons/byc.svg'
import { colors, Grow, useMediaQuery, useTheme} from "@material-ui/core"
import manBall from  '../../images/manBall.svg'
import buildSon from  '../../images/buildSon.svg'
import { red } from '@material-ui/core/colors';



let theme = createMuiTheme()
theme = responsiveFontSizes(theme);

const useStyles= makeStyles(()=>({

    gridCont:{
        width: '100%',
        backgroundColor: 'red',
        height: '300px'
    },
    h3:{
        fontSize: '3rem'
    }
}))
const VideoComponent = ({location})=>{
    const classes = useStyles()    
    return( 
            <Grid container className={classes.gridCont}>
                
            </Grid>
    )
}


export default VideoComponent