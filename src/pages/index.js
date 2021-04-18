import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import landing from  '../images/landing_bg.jpg'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { makeStyles, createMuiTheme, ThemeProvider, MuiThemeProvider, responsiveFontSizes } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid';
import { Typography, Button, withTheme } from "@material-ui/core"
import Paper from '@material-ui/core/Paper'
import { TweenMax, TimelineLite, Power2, Elastic, CSSPlugin } from "gsap/all";
import { useState} from 'react'
import Home2 from '../components/section-2'
import Section3 from '../components/section-3/'
import '../components/layout.css'
import { Autorenew } from "@material-ui/icons"


const useStyles = makeStyles({
  root:{
    border: 0,
    borderRadius: 22,
    color: 'white',
    padding: '10px 60px',
    fontWeight: 600,    
    background: 'linear-gradient(45deg, #042d73, #04befe)'
  }
  
}) 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
function BtnStyled(){
  const classes = useStyles()
  return <Button className={classes.root}>Application</Button>
}

// const theme = createMuiTheme();
// theme = responsiveFontSizes(theme);
const IndexPage = () => {

  const [loading, setLoading] = useState(false)

  // useEffect(()=>{
  //     setLoading(true)
  //     setTimeout(()=>{
  //       setLoading(false)
  //     }, 8000)
  // })
      {

       return (
        
        <Layout> 
       
          <SEO title="Home" />          
            <Grid container className="cont">
            <img src={landing}/>
              <Grid item xs={12} md={8} className="">                            
            
              </Grid>
            </Grid>  
          <Home2 />
          <Section3 />
        </Layout>
    
        )
      }
  }
export default IndexPage