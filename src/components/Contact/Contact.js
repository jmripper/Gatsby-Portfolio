import React, { useState } from "react"
import styled from "styled-components"

const Section = styled.section`
  text-align: center;
  background-color: #ffffff;
  padding: 70px 0 30px;
  width: 100%;
  position: relative;
  font-family: "Raleway", sans-serif;

  @media (min-width: 375px) {
    padding: 70px 20px 70px;
  }

  h2 {
    font-family: inherit;
    font-size: 2em;
    margin: 1em auto;
    font-weight: 400;
    text-align: center;
  }

  p {
    font-family: inherit;
    font-weight: 400;
    text-align: center;
    line-height: 22px;
    font-size: 16px;
    padding: 0 15px 20px;
    margin: 0;
  }

`

const Form = styled.form`
  display: flex;
  flex-flow: column;
  position: relative;
  justify-content: center;
  background-color: #f4f4f4;
  padding: 10px 15px 20px;
  border-radius: 6px;
  margin: 0 auto;
  font-family: "Raleway", sans-serif;

  @media (min-width: 425px) {
    max-width: 600px;
    padding: 30px 45px 40px;
  }

  label {
    padding: 10px 0 5px 0;
    font-size: 16px;
    line-height: 18px;
    text-align: left;
    font-family: inherit;
  }

  input {
    line-height: 1.5em;
    padding: 2px;
    border-radius: 6px;
  }

  textarea {
    border-style: inset;
    border-radius: 6px;
    line-height: 1.5em;
    padding: 2px;
    border-width: 2px;
    border-color: initial;
  }
`
const Submit = styled.a`
  border: 0;
  border-radius: 6px;
  position: relative;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  padding: 10px;
  width: 80%;
  cursor: pointer;
  margin: 20px auto 5px;
  background-color: #000067;
  font-family: "Raleway", sans-serif;
  color: #ffffff;
  font-size: 18px;
  display: block;

  &:hover {
    background-color: #0000a2;
    border: 4px solid #0000a2;
    text-decoration: underline;
  }
`

const Contact = props => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = async e => {
    e.preventDefault()

    // try {
    const response = await fetch("/.netlify/functions/sendmail", {
      method: "POST",
      body: JSON.stringify(formState),
    })
      .then(response => {
        if (!response.ok) {
          //not 200 response
          return
        }
        console.log("Thank you, your message has been sent")
        alert("Success!")
      })
      .catch(error => {
        alert(error)
      })
    // } catch (error) {
    //error
    // alert(error)
  }

  const handleChange = e => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  const formError = () => {}

  return (
    <Section>
      <h2>Contact:</h2>
      <p>Let's Connect! I’d love to hear from you. Also, feel free to connect with me on <a href="https://www.linkedin.com/in/jennifer-ripper/">LinkedIn</a>!</p>
      <Form name="contact" onSubmit={handleSubmit} method="post">
        <label htmlFor="name">Name *</label>
        <input
          onChange={handleChange}
          name="name"
          id="Name"
          required
          type="text"
        />
        <label htmlFor="email">Email *</label>
        <input
          onChange={handleChange}
          name="email"
          id="email"
          required
          type="email"
        />
        <label htmlFor="subject">Subject</label>
        <input
          onChange={handleChange}
          type="text"
          name="subject"
          id="subject"
        />
        <label htmlFor="message">Message *</label>
        <textarea
          onChange={handleChange}
          type="textarea"
          name="message"
          id="message"
          rows="5"
          required
        />
        <Submit>Let's Connect</Submit>
      </Form>
    </Section>
  )
}
export default Contact
