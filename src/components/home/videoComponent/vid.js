import React from 'react'
import PropTypes from 'prop-types'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme)=>({
    paperplay:{
     
    },
}))

const Vid = (props)=>{
    const classes = useStyles()
    return (
        <>
           <Layout>
           <div className="page-wrap">
            <Grid container spacing={2}>
            <Grid item md={6} xs={12}>
                <Paper className={classes.paperplay}></Paper>
            </Grid>

                <Grid item md={6} xs={12}>
                    <Paper className={classes.paperplay}></Paper>
                </Grid>
            </Grid> 
           </div>          
           </Layout> 
        </>
    )
}

Vid.propTypes = {

}

export default Vid

