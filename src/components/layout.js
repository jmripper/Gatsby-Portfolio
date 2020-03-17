import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { ThemeProvider } from "styled-components"
import styles from "../styles/styles"

import NavBar from "./Global/Menu"
import Footer from "../components/Global/Footer"
import "../styles/normalize.css"
import "../styles/fonts.css"

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
