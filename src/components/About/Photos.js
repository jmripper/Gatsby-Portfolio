import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const Section = styled.section`
  text-align: center;
  background-color: #ffffff;
  padding: 0 20px;
  width: 100%;
  position: relative;
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
      />
      <Photo
        fluid={props.data.familyImg.childImageSharp.fluid}
        role="image"
      />
    </Section>
  )
}
export default PhotoSection
