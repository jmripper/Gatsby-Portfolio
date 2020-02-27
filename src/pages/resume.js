import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Resume from "../components/Resume/Resume"


const ResumePage = props => {
  return (
    <Layout>
      <SEO title="Resume" />
      <Resume />
    </Layout>
  )
}

export default ResumePage;
