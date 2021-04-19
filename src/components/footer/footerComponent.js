import React from 'react'
import './footer.css'
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles'
import { Typography } from '@material-ui/core';
import byc from '../../images/icons/byc.svg'

const useStyles= makeStyles(()=>({
    byc:{
        position: 'absolute',
        bottom: -20,
        left: 100,
        zIndex: 20
    },
    fgrid:{
        backgroundColor: 'red',
        height: 350,
        marginBottom: 30,
        margin: '0 auto'
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
                    <li></li>
                    <li></li>
                    <li></li>
                    </ul>
                    </div>                 
                    </Grid>

                    <Grid item md={4} xs={10} className={classes.fgrid}>  
                    <h3>Contact</h3>                  
                    </Grid>                
                </Grid>
                <img src={byc} className={classes.byc} />
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