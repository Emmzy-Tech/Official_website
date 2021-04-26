import React from 'react'
import PropTypes from 'prop-types'
import Layout from "../components/layout"
//import "./about.css"
import SEO from "../components/seo"
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AbTop from "../components/about"


const useStyles = makeStyles((theme)=>({
 
}))

const About = (props)=>{
    const classes = useStyles()
    return (
        <>
           <Layout>
           <AbTop />       
           </Layout> 
        </>
    )
}

About.propTypes = {

}

export default About

