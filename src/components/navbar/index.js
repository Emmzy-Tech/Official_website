import * as React from "react"
import PropTypes, { objectOf } from "prop-types"
import { Link } from "gatsby"
import './nav.css'
import '../Layout.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../images/logo.svg'
import { colors } from "@material-ui/core";
import { useState, useEffect } from 'react'


// const setNav = ()=>{
//   if(document.documentElement.scrollTop >= 70){
//     // alert('reached 50')
//   }
// }
// window.addEventListener('scroll', setNav)
const Header = ({ siteTitle }) => {
  const [nav, setNav]  = useState(false)

 return(
  <header>
      
  </header>
)
 }

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
