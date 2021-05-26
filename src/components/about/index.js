import React from 'react'
import './about.css'
import Grid from '@material-ui/core/Grid';
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

    TypographyText:{
        color: 'black',
        fontWeight: 500,
        fontFamily:['-appleMacSystemFont','sans-serif'].join(','),
        paddingBottom: 40,
        fontSize: '2rem',
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: 'absolute',
        top: '130px',
        left: '43%',
        [theme.breakpoints.down('md')]:{
            fontSize: '1rem',
            position: 'absolute',
            top: '65px',
            right: '0',
            fontWeight: 700,
        }
    },

    h3:{
        fontSize: '2rem',
        [theme.breakpoints.down('sm')]:{
            fontSize: '1rem',
        }
    }
}))
const AbTop = ({location})=>{
    const classes = useStyles()    
    return( 
            <Grid container className="gridCont">
                <Grid item className="gridItem" xs={12}>
                    <MuiThemeProvider theme={theme}>            
                    <Typography variant="h1" gutterBottom className={classes.TypographyText}>Why data maters</Typography>                  
                    </MuiThemeProvider>
                </Grid>
                <Grid item className="itemLower h" sm={6} xs={6}>
                    <img src={manBall}/>
                </Grid>    
                <Grid item className="itemLower2 h" sm={6} xs={6}>
                    <img src={buildSon}/>
                </Grid>   
                
                <Grid item className="itemText" md={6} xs={12}>
                    <MuiThemeProvider theme={theme}>            
                    <Typography gutterBottom className={classes.h3}>Data is gold, the reason for the trends on it</Typography>
                    <Typography variant="body" gutterBottom className={classes.textBody}>College isn’t just a place to learn. It’s where you’ll find a community filled with new people and have new experiences. It’s where you’ll make friends for life and learn important lessons about yourself. It's where you'll go to reach new heights.</Typography>                  
                    </MuiThemeProvider>
                </Grid>

                <Grid item className="item-space" xs={6}>
                
                </Grid> 
                </Grid>
    )
}


export default AbTop