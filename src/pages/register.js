import React from 'react'
import PropTypes from 'prop-types'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Registeration from '../components/Registration/RegisterForm'



const useStyles = makeStyles((theme)=>({
 
}))

const RegisterForm = (props)=>{
    
    return (
        <>
           <Layout>
             <Registeration />       
           </Layout> 
        </>
    )
}


export default RegisterForm
