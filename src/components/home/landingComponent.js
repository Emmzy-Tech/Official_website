import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles, createMuiTheme, ThemeProvider, MuiThemeProvider, responsiveFontSizes } from '@material-ui/core/styles'
import { Button, withTheme, IconButton } from "@material-ui/core"
import Paper from '@material-ui/core/Paper'

//import { Splide, SplideSlide } from '@splidejs/react-splide';
import './landing.css'
import { Typography } from '@material-ui/core'



const useStyles= makeStyles((theme)=>({
    gridCont:{
        backgroundColor: 'red',
        minHeight: '700px',
        width: '100%',
        [theme.breakpoints.down('md')]:{
            width: '100%',
        },   
    },
}))

const LandingComponent = ({location})=>{
    const classes = useStyles()    
    return( 
            <Grid container className={classes.gridCont}>     
                  <div className="example2">
                  
                  </div>      
                <div className="img1"></div>
                <div className="img2"></div>
                <div className="img3"></div> 
           
             </Grid>
    )
}


export default LandingComponent
