import * as React from "react"
import PropTypes, { objectOf } from "prop-types"
import { Link } from "gatsby"
import './nav.css'
import '../Layout.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../images/logo.svg'
import { colors } from "@material-ui/core";
import { useState, useEffect } from 'react'

const setNav = ()=>{
  window.addEventListener('scroll', setNav)
  if(document.documentElement.scrollTop >= 70){
    // alert('reached 50')
  }
}


const Header = ({ siteTitle }) => {

 return(
  <header>
    <Navbar expand="lg" className="navbar active">
    <Navbar.Brand href="#home"><img src={logo} className="logo"/></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarResponsive" />
    <Navbar.Collapse id="navbarResponsive">
      <Nav as="ul" className="ml-auto">
      <Nav.Item as="li">
          <Link to="/" className="nav-link" activeClassName="active">Home</Link>
      </Nav.Item>
      <Nav.Item as="li">
      <Link to="/page-2" className="nav-link" activeClassName="active">About Us</Link>
      </Nav.Item>
      <Nav.Item as="li">
      <Link to="#" className="nav-link" activeClassName="active"></Link>
      </Nav.Item>
      <Nav.Item as="li">
      <Link to="#" className="nav-link" activeClassName="active"></Link>
      </Nav.Item>
      <Nav.Item as="li">
      <Link to="#" className="nav-link" activeClassName="active"></Link>
      </Nav.Item>
      </Nav>
    </Navbar.Collapse>
    </Navbar>
    
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
