import React from 'react'
import Grid from '@material-ui/core/Grid'
import {makeStyles} from '@material-ui/core/styles'
import { Height } from '@material-ui/icons'

const useStyles= makeStyles(()=>({


    gridCont:{
        backgroundColor: 'red',
        minHeight: '100%',
        width: '100%'       
    },
}))

const LandingComponent = ({location})=>{
    const classes = useStyles()    
    return( 
            <Grid container className={classes.gridCont}>
               
            </Grid>
    )
}


export default LandingComponent
