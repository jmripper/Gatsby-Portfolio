import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ResumePage = props => {
  return (
    <Layout>
      <SEO title="Resume" />
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      
    </Layout>
  )
}

export default ResumePage;
