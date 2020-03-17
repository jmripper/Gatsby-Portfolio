import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const Section = styled.section`
  background: #eef3f6;
  text-align: center;
  padding: 70px 20px 30px;
  width: 100%;
  position: relative;
  h2 {
    font-family: "Raleway", sans-serif;
    font-weight: 400;
    margin: 1em auto;
    text-align: center;
    font-size: 2em;
  }
  p {
    font-family: "Raleway", sans-serif;
    font-weight: 300;
    line-height: 22px;
    max-width: 800px;
    margin: 0 auto;
    font-size: 18px;
  }
`

const Subheading = styled.h3`
  font-family: "Raleway", sans-serif;
  font-weight: 400;
`

const HeadShot = styled(Img)`
  border-radius: 50%;
  height: 280px;
  width: 280px;
  margin: 0 auto;
`

const Me = props => {
  return (
    <Section>
      <h2>About Me</h2>
      <HeadShot
        fluid={props.data.headShot.childImageSharp.fluid}
        role="image"
        alt={"Head Shot - 2020 - Jenny Ripper"}
      />
      <Subheading>
        Hey Again, I'm Jenny{" "}
        <span role="image" aria-label="hand waving emoji">
          👋
        </span>
      </Subheading>
      <p>
        I'm a former digital marketer turned full-stack web developer, driven to
        create high-quality products with intuitive creative design and
        functionality. A team player who can quickly adapt, I have an analytical
        mind and am self-motivated to discover new innovative solutions.
      </p>
    </Section>
  )
}
export default Me
