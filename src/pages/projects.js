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
    movieImage: file(relativePath: {eq: "projects/jmbd.png"}) {
      childImageSharp {
        fluid(maxWidth: 450, quality: 90, maxHeight: 350) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    tictactoeImage: file(relativePath: {eq: "projects/Tic-Tac-Toe.png"}) {
      childImageSharp {
        fluid(maxWidth: 450, quality: 90, maxHeight: 350) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    modernTImage: file(relativePath: {eq: "projects/ModernT.png"}) {
      childImageSharp {
        fluid(maxWidth: 450, quality: 90, maxHeight: 350) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    covidImage: file(relativePath: {eq: "projects/Covid19-Tracker.png"}) {
      childImageSharp {
        fluid(maxWidth: 450, quality: 100, maxHeight: 350) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

