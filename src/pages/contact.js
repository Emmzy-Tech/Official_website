import React from 'react'
import PropTypes from 'prop-types'
import Layout from "../components/layout"
import "../components/main.css"
import SEO from "../components/seo"
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme)=>({
    paperplay:{
        padding: 20,
        height: 500,
        position: 'relative',
        backgroundColor: 'red',
    },
    car:{
        position: 'absolute',
        top: 0,
    }
}))

const Contact = (props)=>{
    const classes = useStyles()
    return (
        <>
           <Layout>
           <div className="page-wrap">
           <Grid container spacing={2}>
           <Grid item md={6} xs={12}>
                <Paper className={classes.paperplay}>
            
                </Paper>
            </Grid>

            <Grid item md={6} xs={12}>
            <Paper className={classes.paperplay}>
        
            </Paper>
            </Grid>
           </Grid> 
           </div>          
           </Layout> 
        </>
    )
}

Contact.propTypes = {

}

export default Contact

