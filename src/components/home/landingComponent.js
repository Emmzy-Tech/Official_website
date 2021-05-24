import React from 'react'
import Grid from '@material-ui/core/Grid'
import {makeStyles} from '@material-ui/core/styles'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import './landing.css'

const useStyles= makeStyles(()=>({
    gridCont:{
        backgroundColor: 'red',
        minHeight: '700px',
        width: '100%'       
    },
}))

const LandingComponent = ({location})=>{
    const classes = useStyles()    
    return( 
            <Grid container className={classes.gridCont}>               
               <div className="img1"></div>
               <div className="img2"></div>
               <div className="img3"></div>
             </Grid>
    )
}


export default LandingComponent
