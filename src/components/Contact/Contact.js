import React, { useState } from "react"
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
  background-color: #f4f4f4;
`
const Submit = styled.button`
  border: 0;
  border-radius: 6px;
  position: relative;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  padding: 10px;
  width: 80%;
  cursor: pointer;
  margin: 0 auto 2em;
  background-color: navy;
  font-family: "Raleway", sans-serif;
  color: #ffffff;
  font-size: 18px;
`

const Contact = props => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = async e => {
    e.preventDefault();
    
    try{
      const response = await fetch("/.netlify/functions/sendmail", {
        method: "POST",
        body: JSON.stringify(formState),
      })

      if (!response.ok) {
        //not 200 response
        return
      }
    } catch(e){
      //error
    }
  
  }

  const handleChange = e => {
    setFormState({...formState, [e.target.name]: e.target.value});

  }

  return (
    <Section>
      <h2>Contact:</h2>
      <Form>
        <input
          name="name"
          id="Name"
          placeholder="NAME"
          required
          type="text"
        />
        <input
          name="email"
          id="ContactEmail"
          placeholder="EMAIL"
          required
          type="email"
        />
        <textarea
          type="textarea"
          name="message"
          id="ContactText"
          placeholder="MESSAGE"
          required
        />
        <Submit>Let's Connect</Submit>
      </Form>
    </Section>
  )
}
export default Contact
