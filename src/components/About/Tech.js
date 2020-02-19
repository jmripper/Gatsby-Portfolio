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
`

const Tech = props => {
  return (
    <Section>
      <h2>Tech Stack</h2>
      <p>Editor: VS Code</p>
      <p>Front-End: HTML, CSS, React, JS ES6</p>
      <p>Backend: MySQL, MongoDB, Node.js, Python</p>
    </Section>
  )
}

export default Tech;
