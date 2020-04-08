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
  }
`

const Bold = styled.span`
  font-family: "Raleway", sans-serif;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  margin: 0;
  padding-right: 10px;
`

const Tech = props => {
  return (
    <Section>
      <h2>Tech Stack</h2>
      <p>
        <Bold>Editor:</Bold>
        VS Code
      </p>
      <p>
        <Bold>Front-End:</Bold>
        HTML, CSS, React, Javascript ES6, RESTful APIs, GraphQL
      </p>
      <p>
        <Bold>Backend:</Bold>
        MySQL, MongoDB, Node.js, Python, Django, Express, Mongoose, PostgreSQL
      </p>
      <p>
        <Bold>Adobe Creative Cloud:</Bold>
        Adobe XD, Photoshop, Illustrator
      </p>
      <p>
        <Bold>Data Analysis:</Bold>
        Tableau, Google Analytics
      </p>
    <hr />
      <p>
        <Bold>What I'm Learning</Bold>
        Angular & Typescript
      </p>
    </Section>
  )
}

export default Tech
