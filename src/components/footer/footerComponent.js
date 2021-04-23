import React from 'react'
import './footer.css'
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles'
import { Typography } from '@material-ui/core';
import byc from '../../images/icons/byc.svg'
import { motion } from "framer-motion"
import { colors, Grow, useMediaQuery, useTheme, theme } from "@material-ui/core";

const useStyles= makeStyles(()=>({
    byc:{
        position: 'absolute',
        bottom: 5,
        left: 100,
        zIndex: 20,
        width: 130,
    },
    listgridColor:{
        listStyle: 'none'
    }
}))
const Footer = ()=>{
    const classes = useStyles()
    return(
        <>
            <div className="footer">
            <div className="wrapFooter">
                <Grid container spacing={2} className="topLine">
                    <Grid item md={4} xs={10} className={classes.fgrid}>  
                    <div className="footerCont">
                        <div className="con1">
                        <h3>Get involved</h3>
                        <p>If you're interested in being a part of our movement for change, please do not hesitate. Our team is filled of many dedicated individuals, but we're always looking for more help. We strongly believe that many hands makes work lighter, and we're hoping for as many helping hands as possible.</p>
                        <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        </ul>
                        </div>
                     
                    </div> 
                    </Grid>

                    <Grid item md={4} xs={10} className={classes.fgrid}>   
                    <div className="con1">
                    <h3>Quick links</h3>
                    
                    <ul>
                    <li>9701 Apollo Drive suite 301 Largo MD 20774</li>
                    <li>info@capacitybay.org</li>
                    <li>Mon.-Fri.: 10-20 Sun.: 12-16</li>
                    </ul>
                    </div>                 
                    </Grid>

                    <Grid item md={4} xs={10} className="fgrid">  
                    <h3>Contact</h3> 
                    <ul>
                    <li>Login</li>
                    <li>Sign up</li>
                    <li>Volunteer</li>
                    <li>Contact us</li>
                    <li>Terms of service</li> 
                    <li>Covid19</li>            
                    

                    </ul>                 
                    </Grid>                
                </Grid>
       
            </div>
                <div className="bottomLine">
                    <ul className="flexedBottom">
                        <li>Terms of use</li>
                        <li>License agreement</li>
                        <li>Privacy policy</li>
                        <li>Application affirmation</li>
                    </ul>

                </div>
            </div>
        </>
    )
}


export default Footer 