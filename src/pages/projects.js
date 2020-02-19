import React from "react"
import { graphql, Link } from "gatsby";

import Layout from "../components/layout"
import SEO from "../components/seo"
import Projects from "../components/Projects/ProjectsSection"


const ProjectsPage = props => {
  return (
    <>
      <Layout>
        <SEO title="Projects" />
        <Projects data={props.data} />
        <Link to="/page-2/">Go to page 2</Link>
      </Layout>
    </>
  )
}

export default ProjectsPage;

export const ProjectsPageImageQuery = graphql`
  query {
    triviaImage: file(relativePath: {eq: "projects/NationalParksTrivia2019.png"}) {
      childImageSharp {
        fluid(maxWidth: 450, quality: 90, maxHeight: 350) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

