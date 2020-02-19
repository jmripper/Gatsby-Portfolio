import React from "react"
import { graphql, Link } from "gatsby";

import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../components/About/About"
import Tech from "../components/About/Tech"

const AboutPage = props => {
  return (
    <>
      <Layout>
        <SEO title="About Me" />
        <About data={props.data} />
        <Tech />
      </Layout>
    </>
  )
}

export default AboutPage;

export const AboutPageImageQuery = graphql`
  query {
    travelIcon: file(relativePath: {eq: "airplane.png"}) {
      childImageSharp {
        fluid(maxWidth: 100, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

