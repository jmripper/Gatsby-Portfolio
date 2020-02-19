/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
import { ThemeProvider } from "styled-components"
import styles from "../styles/styles"

import NavBar from "./Global/Menu"
import Footer from "../components/Global/Footer"
import "./layout.css"
import "../styles/normalize.css"

const Layout = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={styles}>
        <>
          <NavBar />
          <main>{children}</main>
          <Footer />
        </>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
