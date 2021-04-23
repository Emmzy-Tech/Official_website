import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import landing from  '../images/landing_bg.jpg'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { makeStyles, createMuiTheme, ThemeProvider, MuiThemeProvider, responsiveFontSizes } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid';
import { Typography, Button, withTheme, IconButton } from "@material-ui/core"
import Paper from '@material-ui/core/Paper'
import { TweenMax, TimelineLite, Power2, Elastic, CSSPlugin } from "gsap/all";
import { useState} from 'react'
import Home2 from '../components/section-2'
import Section3 from '../components/section-3/'
import '../components/layout.css'
import { Autorenew } from "@material-ui/icons"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { colors, Grow, useMediaQuery, useTheme } from "@material-ui/core";
import RecipeReviewCard from '../components/home/cardComponent/card'


const useStyles = makeStyles((theme)=>({
  root:{
    border: 0,
    borderRadius: 22,
    color: 'white',
    padding: '10px 60px',
    fontWeight: 600,    
    position:"absolute",
    top: 540,
    left: 180,
    background: 'linear-gradient(45deg, #042d73, #04befe)',
    [theme.breakpoints.up('sm')]:{
      fontSize:'1rem'
    },
    [theme.breakpoints.down('xs')]:{
      position: "absolute",
      left: 18,
      top: 200
    }
  },
  landingCard:{
    position: "absolute",
    top: 0,
  },
  cont:{
    position: "relative",
  },
  Typography:{
    fontSize:'1.5rem',
    top: 90,
    position: 'absolute',
    zIndex: 23,
    color: 'white',
    marginLeft: 60,
    [theme.breakpoints.up('md')]:{
      fontSize: '4.5rem',
      marginTop: 100,
      marginLeft: 20
    },
    [theme.breakpoints.down('xs')]:{
      marginLeft: 2,
      fontSize: '1.8rem',
      top: 45,
      position: 'absolute',
    }
  },
  landingP:{
    position: 'absolute',
    top: 130,
    fontSize: '.79em',
    color: 'white',
    marginLeft: 25,
    fontWeight: 400,
    [theme.breakpoints.up('md')]:{
      fontSize: '1.3rem',
      marginTop: 260
    },
    [theme.breakpoints.down('xs')]:{
     position: "absolute",
     top: 110,
     marginLeft: 0,
    }
  },
  container:{
    position: 'relative'
  }
}))
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
function BtnStyled(){
  const classes = useStyles()
  return <Button className={classes.root}>Application</Button>
}

// const theme = createMuiTheme();
// theme = responsiveFontSizes(theme);
const IndexPage = () => {
  const classes = useStyles()
  const [loading, setLoading] = useState(false)

  // useEffect(()=>{
  //     setLoading(true)
  //     setTimeout(()=>{
  //       setLoading(false)
  //     }, 8000)
  // })
  const theme = createMuiTheme({
    palette:{
      type: "dark",
    }
  })

       return (         
        <ThemeProvider theme={theme}>
        <Layout>        
          <SEO title="Home" />       
            <Grid container className={classes.cont}>
            <RecipeReviewCard/>
            <img style={{width: '100%'}}src={landing}/>  
          
            <div className="container">             
              <Grid item xs={12} md={8} className="">                           
              <h1 className={classes.Typography}>Your future <br/>Starts here</h1>
              <p className={classes.landingP}>Apply to college for the first time or transfer <br />to complete your degree. Navigate your entire <br />college application journey with Common App.</p>          
              <Button className={classes.root}color="primary">Register Now</Button>
              </Grid>                
              </div>  
                  
            </Grid> 
          <Home2 />
          <Section3 />
        </Layout>
        </ThemeProvider>
        )
      
  }
export default IndexPage