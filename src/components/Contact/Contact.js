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

const Form = styled.form`
  display: flex;
  flex-flow: column;
  position: relative;
  justify-content: center;
`

const Contact = props => {
  return (
    <Section>
      <h2>Contact:</h2>
      <Form>
        <input
          name="name"
          id="Name"
          placeholder="NAME"
          required=""
          type="text"
          value=""
        />
        <input
          name="email"
          id="ContactFormEmail"
          placeholder="EMAIL"
          required=""
          type="email"
          value=""
        />
        <textarea
          name="message"
          id="ContactFormText"
          placeholder="MESSAGE"
          required=""
        />
        <button>Let's Connect</button>
      </Form>
    </Section>
  )
}
export default Contact
