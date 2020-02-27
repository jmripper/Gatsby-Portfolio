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
    margin: 1em auto;
  }
  p {
    font-family: "Raleway", sans-serif;
    font-weight: 300;
    margin: .5em 0;
    font-size: 18px;
    line-height: 22px;
  }
  span {
    font-weight: 500;
  }
`

const Tech = props => {
  return (
    <Section>
      <h2>Tech Stack</h2>
      <p><span>Editor:</span> VS Code</p>
      <p><span>Front-End:</span> HTML, CSS, React, JS ES6, RESTful APIs, GraphQL</p>
      <p><span>Backend:</span> MySQL, MongoDB, Node.js, Python, Django, Express, Mongoose, PostgreSQL</p>
    </Section>
  )
}

export default Tech;
