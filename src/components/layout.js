/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./navbar/AppBar"
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect } from 'react'
import styled, {ThemeProvider} from 'styled-components'
import {lightTheme, darkTheme, GlobalStyles} from './theme.js'
import Footer from './footer/footerComponent'
import DrawerNav from '../components/navbar/DrawerComponent/drawer'
import DrawerComponent from "../components/navbar/DrawerComponent/drawer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  // const styledApp = styled.div`
  
  // `
  const [theme, setTheme] = useState('dark')

  const themeToggler = ()=>{
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <>

      <div>
          <Header />
          <DrawerComponent />
          <main>{children}</main>
          <Footer />
      </div>
     
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
