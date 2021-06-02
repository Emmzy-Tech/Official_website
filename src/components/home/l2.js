import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles, createMuiTheme, ThemeProvider, MuiThemeProvider, responsiveFontSizes } from '@material-ui/core/styles'
import { Button, withTheme, IconButton } from "@material-ui/core"
import Paper from '@material-ui/core/Paper'
import {useState, useEffect} from 'react'
//import { Splide, SplideSlide } from '@splidejs/react-splide';
import './landing.css'
import { Typography } from '@material-ui/core'



const useStyles= makeStyles((theme)=>({
    gridCont:{    
        minHeight: '700px',
        width: '100%',
        [theme.breakpoints.down('md')]:{
            width: '100%',
        },   
    },
    heading:{
        fontSize: '3rem',
        color: 'white',
        fontWeight: '700',
        width: '800px',
        [theme.breakpoints.down('md')]:{
            fontSize: '2rem',
            marginTop: '70px',
            paddingLeft: '20px',
        }
    },
    h3: {
        color: '#af221f',
        fontSize: '2rem',
        [theme.breakpoints.down('md')]:{
            paddingLeft: '20px',
        }
    }
}))

const LandingComponent = ({location})=>{
    const [slides, setSlide] = useState([
        {first: "Welcome To The Workforce Development Exchange", second: "For US Veterance", id: 1},
        {first: "Welcome To The Workforce Development Exchange", second: "For US Veterance", id: 1},
    ])
    
    const [seconds, setSeconds] = useState(0);
    

    const classes = useStyles()    
    return( 
            <Grid container className={classes.gridCont}>    
                <div className="generalDiv"> 
                    {slides.map((slide)=>(
                        <div className="example2" key={slide.id}>
                        <Typography className={classes.heading}>{slide.first}</Typography>
                        <Typography variant="h3" className={classes.h3}>{slide.second}</Typography>
                        </div>
                    ))}    
                </div>
                <div className="img1"></div>
                <div className="img2"></div>
                <div className="img3"></div> 
           
             </Grid>
    )
}


export default LandingComponent
