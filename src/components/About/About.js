import React from "react"
import styled from "styled-components"

const Section = styled.section`
  text-align: center;
  padding: 70px 20px 30px;
  width: 100%;
  position: relative;
  h2 {
    font-family: "Raleway", sans-serif;
    font-weight: 400;
    margin: 1em auto;
    text-align: center;
  }
  p {
    font-family: "Raleway", sans-serif;
    font-weight: 400;
  }
`

const Subheading = styled.h3`
  font-family: "Raleway", sans-serif;
  font-weight: 400;
`

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0;
  padding: 0;
  li {
    font-family: "Raleway", sans-serif;
    font-weight: 300;
    font-size: 18px;
    line-height: 22px;
    vertical-align: center;
    display: flex;
    flex-flow: wrap;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`

const About = props => {
  return (
    <Section>
      <h2>About Me</h2>
      <p>Blah blah this is about me</p>
      <Subheading>When I'm Not Coding, You Can Find Me</Subheading>
      <List>
        <li>Hanging with husband (married Feb. 2020) and our dog Maple</li>
        <li>Traveling - Most recently to Brazil in Sept. 2019</li>
        <li>Hiking around the DMV</li>
        <li>Watching Ohio State football. O-H!</li>
        <li>Working on DIY projects</li>
      </List>
    </Section>
  )
}
export default About
