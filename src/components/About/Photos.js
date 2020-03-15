import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const Section = styled.section`
  text-align: center;
  background-color: #ffffff;
  padding: 0;
  width: 100%;
  position: relative;
  display: flex;
  flex-flow: wrap;

  @media (min-width: 768px) {
      flex-flow: row;
  }
`
const Photo = styled(Img)`
  height: 280px;
  width: 100%;
  margin: 0 auto;
`

const PhotoSection = props => {
  return (
    <Section>
      <Photo
        fluid={props.data.amsterdamImg.childImageSharp.fluid}
        role="image"
        alt={"Amsterdam 2017 by Jenny Ripper"}
      />
      <Photo
        fluid={props.data.familyImg.childImageSharp.fluid}
        role="image"
        alt={"Family Photo 2019"}
      />
      <Photo
        fluid={props.data.footballImg.childImageSharp.fluid}
        role="image"
        alt={"Ohio State Football 2019 by Jenny Ripper"}
      />
    </Section>
  )
}
export default PhotoSection
