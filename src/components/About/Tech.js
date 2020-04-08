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
  span {
    font-weight: 500;
  }
`

const Bold = styled.h4`
  font-family: "Raleway", sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
`

const Tech = props => {
  return (
    <Section>
      <h2>Tech Stack</h2>
      <Bold>Editor:</Bold>
      <p>VS Code</p>
      <Bold>Front-End:</Bold>
      <p>HTML, CSS, React, Javascript ES6, RESTful APIs, GraphQL</p>
      <p>
        <span>Backend:</span> MySQL, MongoDB, Node.js, Python, Django, Express,
        Mongoose, PostgreSQL
      </p>
      <p>
        <span>Adobe Creative Suite:</span>Adobe XD, Photoshop, Illustrator
      </p>
    </Section>
  )
}

export default Tech
