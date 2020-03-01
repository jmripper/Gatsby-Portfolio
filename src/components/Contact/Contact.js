import React from "react"
import styled from "styled-components"

const Section = styled.section`
  text-align: center;
  background-color: #ffffff;
  padding: 70px 20px 30px;
  width: 100%;
  position: relative;
  font-family: "Raleway", sans-serif;

  h2 {
    font-family: inherit;
    font-size: 2em;
    margin: 1em auto;
    font-weight: 400;
    text-align: center;
  }
`


const Contact = props => {
  return (
    <Section>
      Contact Info:
    </Section>
  )
}
export default Contact
