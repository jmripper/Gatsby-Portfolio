import React from "react"
import styled from "styled-components"

const Section = styled.section`
  text-align: center;
  background-color: #ffffff;
  padding: 30px 20px;
  width: 100%;
  position: relative;
`

const Subheading = styled.h3`
  font-family: "Raleway", sans-serif;
  font-weight: 400;
  font-size: 24px;
  line-height: 30px;
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
    font-size: 20px;
    line-height: 28px;
    vertical-align: center;
    display: flex;
    flex-flow: wrap;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: .5em 0;
  }
`

const About = props => {
  return (
    <Section>
      <Subheading>When I'm Not Coding, You Can Find Me</Subheading>
      <List>
        <li>Hanging with husband (married Feb. 2020) and our dog Maple</li>
        <li>Traveling - Most recently to Brazil in Sept. 2019 & Hawaii fall 2020</li>
        <li>Hiking around the DMV</li>
        <li>Watching Ohio State football. O-H!</li>
        <li>Working on DIY projects</li>
      </List>
    </Section>
  )
}
export default About
