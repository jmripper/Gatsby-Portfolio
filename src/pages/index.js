import React from "react"
import { graphql } from "gatsby";

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeaderImage from "../components/HomePage/HeaderImage"

const IndexPage = props => {
  return (
    <>
      <Layout>
        <SEO title="Home" />
        <HeaderImage data={props.data} />
      </Layout>
    </>
  )
}

export default IndexPage;

export const CoverImageQuery = graphql`
  query {
    coverImg: file(relativePath: {eq: "dealthvalley.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1600, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

