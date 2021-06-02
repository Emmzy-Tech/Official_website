import React, {useEffect, useState} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import './nav.css'
import {List, ListItemText, ListItem, ListItemIcon} from '@material-ui/core'
import { Link } from "gatsby"
import {useTheme, theme} from '@material-ui/core/styles'
import {useMediaQuery} from '@material-ui/core/useMediaQuery'
import Drawer from '../navbar/DrawerComponent/drawer'
import { Height } from '@material-ui/icons'
import NavLogo from '../../images/Capacity-Bay-4-footer.png'


const useStyles= makeStyles((theme)=>({
    appBarTrans:{
        background: 'transparent',
        boxShadow: 'none',
        [theme.breakpoints.down('md')]:{
            width: '100%',
        }
    },
    appBarScroll:{
        backgroundColor: '#4A4A4A',
    },
    toolBox:{
        display: 'flex',
        justifyContent: 'space-around',
        [theme.breakpoints.down('md')]:{
            display: 'none'
        }        
    },
    link:{
        color: 'white',
        listStyle: 'none',
        fontSize: '1rem',
        fontWeight: '600',
        '&:hover':{
            color: 'black',
            listStyle: 'none',           
        },
    },
  
    logo:{
        width: '130px',
        position: 'absolute',
        top: '20px',
        left: '40px',
    },
    btn:{
        grow: 1,
    }
}))

export default function ButtonAppBar(){
    const classes = useStyles()
    const theme = useTheme()

     const [Nav, setNav] = useState('appBarScroll')
     const navRef = React.useRef();
     navRef.current = Nav     
   
     useEffect(() => {
        const handleScroll = ()=>{
            //The rule
            const show = window.scrollY > 310
            // The command to the rule
            if(show){
                setNav('appBarCroll')
            }else{
                setNav('appBarTrans')
            }
        }
        // Event listener
        document.addEventListener('scroll', handleScroll)
        // Remove Event listener
        return() => {document.removeEventListener('scroll', handleScroll)}
     },[])


    return(
        <div>
        <AppBar position="fixed" className={classes[Nav]}>
        <img src={NavLogo} className={classes.logo}/>
        <div className="toolbox">
            <Toolbar className={classes.toolBox}>                
                <Link to="/" className={classes.link}>Home</Link>
                <Link to="/about" className={classes.link}>About Us</Link>
                <Link to="/programs" className={classes.link}>Programs</Link>
                <Link to="/about" className={classes.link}>Consulting</Link>
                <Link to="/contact2" className={classes.link}>Contact</Link>
            </Toolbar>            
        </div>
        <a to="#" className="btn">Register</a>
        </AppBar>
    </div>
    )
}
