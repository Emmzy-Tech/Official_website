import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid';
import'./section-3.css'
import { Typography, Button } from '@material-ui/core';
import book from '../../images/icons/book.svg'
import {makeStyles} from '@material-ui/core/styles'
import { colors, Grow, useMediaQuery, useTheme } from "@material-ui/core";

const useStyle = makeStyles((theme)=>({
    Typography:{
    color:'black',
        [theme.breakpoints.down('sm')]:{
            fontSize: '1.7rem',
        },
    },
    book:{
        [theme.breakpoints.up('xs')]:{
            
        },
      
    // contentButton:{
    //   display: "none",
    // }    
}
}))
const Section3 = (props)=>{

   const classes = useStyle()
    return(
        <>
            <div className="section3">
                <Grid container md={6} xs={10} sm={10}className="content">
                    <div className="contentH1">
                        <Typography className={classes.Typography} variant="h3">Your complete college application guide</Typography>
                        <img src={book}  className='book'/>
                    </div>
                    <div className="contentButtonCont">
                        <Typography style={{position: 'absolute', marginTop:'20px'}} variant="subtitle2">It’s go time — and we’ll be with you every step of the way.
                        Here’s where you’ll find what you need to take that next step towards a brighter future.</Typography>
                    </div>
                </Grid>
            </div>
        </>
    )
}


export default Section3