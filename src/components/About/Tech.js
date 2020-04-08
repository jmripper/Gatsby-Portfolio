import React from "react"
import styled from "styled-components"

const Section = styled.section`
  text-align: center;
  padding: 30px 20px 40px;
  width: 100%;
  position: relative;
  background-color: #f4f4f4;
  h2 {
    font-family: "Raleway", sans-serif;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    margin: 1em auto;
  }
  p {
    font-family: "Raleway", sans-serif;
    font-weight: 300;
    margin: 0.5em 0;
    font-size: 20px;
    line-height: 28px;
    display: inline-block;
  }
`

const Bold = styled.h4`
  font-family: "Raleway", sans-serif;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  margin: 0;
  display: inline-block;
  padding-right: 10px;
`

const Tech = props => {
  return (
    <Section>
      <h2>Tech Stack</h2>
      <Bold>Editor:</Bold>
      <p>VS Code</p>
      <Bold>Front-End:</Bold>
      <p>HTML, CSS, React, Javascript ES6, RESTful APIs, GraphQL</p>
      <Bold>Backend:</Bold>
      <p>
        MySQL, MongoDB, Node.js, Python, Django, Express, Mongoose, PostgreSQL
      </p>
      <Bold>Adobe Creative Cloud:</Bold>
      <p>Adobe XD, Photoshop, Illustrator</p>
      <Bold>Data Analysis:</Bold>
      <p>Tableau, Google Analytics</p>

      <h2>What I'm Learning</h2>
      <p>Angular & Typescript</p>
    </Section>
  )
}

export default Tech
