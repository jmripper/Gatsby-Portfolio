import React from "react"
import { graphql } from "gatsby";

import Layout from "../components/layout"
import SEO from "../components/seo"
import Me from "../components/About/Me"
import About from "../components/About/About"
import Tech from "../components/About/Tech"

const AboutPage = props => {
  return (
    <>
      <Layout>
        <SEO title="About" />
        <Me data={props.data} />
        <About data={props.data} />
        <Tech />
      </Layout>
    </>
  )
}

export default AboutPage;

export const AboutPageImageQuery = graphql`
  query {
    headShot: file(relativePath: {eq: "about/HeadShot.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 400, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

