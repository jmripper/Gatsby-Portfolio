import React from "react"
import styled from "styled-components"

const Wrapper = styled.footer`
  position: relative;
  width: 100%;
  padding: 0px;
  margin: 0 auto;
  background: #ffffff;
`

const Info = styled.div`
  max-width: 700px;
  padding: 1em 1em;
  margin: 0 auto;
  @media screen and (min-width: 800px) {
    padding: 1em;
  }

  p {
    font-size: 14px;
    margin: 0;
    padding: 0;
    text-align: center;
    color: #131313;
    font-family: "Raleway", sans-serif;
    text-rendering: optimizeLegibility;
  }
`

const Footer = props => {
  return (
    <Wrapper>
      <Info>
        <p>
          Copyright &copy; {new Date().getFullYear()} — Jenny Lothstein | All
          rights reserved.
        </p>
      </Info>
    </Wrapper>
  )
}

export default Footer
