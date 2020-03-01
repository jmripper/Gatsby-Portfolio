import React from "react"
import styled from "styled-components"

const Section = styled.section`
  text-align: center;
  background-color: #ffffff;
  padding: 70px 20px 30px;
  width: 100%;
  position: relative;

  h3 {
    font-family: "Raleway", sans-serif;
    font-weight: 400;
    color: #000000;
    text-align: center;
  }

  hr {
    height: 10px;
    background: #f4f4f4;
    width: 100%;
    border: none;
  }
`
const ResumeContainer = styled.div`
  display: flex;
  flex-flow: column;
  font-family: "Raleway", sans-serif;
`

const Name = styled.h2`
  font-family: "Raleway", sans-serif;
  font-weight: 400;
  font-size: 2rem;
  color: #000000;
  margin: 0;
  padding: 0;

  span {
    font-size: 16px;
    line-height: 22px;
    display: block;
    padding: 5px 0;
  }
`

const Bio = styled.p`
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  font-weight: 300;
  color: #000000;
  padding: 1em 0;
  margin: 0;
`
const Experience = styled.div`
  display: block;

  span {
    font-family: "Raleway", sans-serif;
    color: #000000;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    text-decoration: underline;
  }

  p {
    text-decoration: none;
    font-weight: 300;
    margin: 0;
    padding: 10px 0;
    font-size: 16px;
    line-height: 22px;
  }

  ul {
    margin: 0;
  }
  li {
    text-align: left;
    font-family: inherit;
    font-size: 16px;
    line-height: 22px;
    color: #000000;
    font-weight: 300;
    text-decoration: none;
  }
`

const Skills = styled.div``

const Resume = props => {
  return (
    <Section>
      <h3>Resume:</h3>
      <ResumeContainer>
        <Name>
          Jennifer Ripper
          <span>Full-Stack Engineer</span>
        </Name>
        <hr />
        <Bio>
          Full-stack engineer, driven to create high-quality products with
          intuitive creative design and functionality. A team player who can
          quickly adapt, with an analytical mind and is self-motivated to
          discover new innovative solutions.
        </Bio>
        <Experience>
          <span>EXPERIENCE:</span>
          <p>
            Software Engineering Immersive General Assembly | Washington D.C
            Nov. 2019 to Feb. 2020
          </p>
          <ul>
            <li>
              Completed 500+ hour full-time immersive Software Engineering
              program that included object-oriented programming, MVC frameworks,
              data modeling, and test-driven applications.
            </li>
          </ul>
        </Experience>
        <Experience>
          <p>
            Digital Marketing Manager EVERFI | Washington D.C Apr. 2019 to Oct.
            2019
          </p>
          <ul>
            <li>
              Setup and managed 8 Facebook and Adwords campaigns and diagnosed
              all data routing discrepancies in Marketo and Salesforce CRM.
            </li>
            <li>
              Created new Wordpress pages and built out new custom components
              with HTML and CSS.
            </li>
          </ul>
        </Experience>
        <Experience>
          <p>
            Marketing Analytics Manager UMGC | Adelphi, MD Jan. 2019 to Apr.
            2019
          </p>
          <ul>
            <li>
              Examined PPC lead generation campaign to identify ways to decrease
              average cost-per-lead.
            </li>
            <li>
              Assembled data reports in Tableau to analyze previous TV and radio
              ratings and spend data.
            </li>
          </ul>
        </Experience>
        <Experience>
          <p>
            Digital Marketing Strategist Membership Marketing Partners |
            Alexandria, VA Oct. 2015 to Dec. 2019
          </p>
          <ul>
            <li>
              Built custom responsive email templates in HTML and CSS for
              automated email marketing campaigns.
            </li>
            <li>
              Used SQL database to query email segments of 3 million plus
              subscribers.
            </li>
            <li>
              Worked with developers to create new landing pages to improve
              mobile usability and implement SEO features to increase organic
              search rankings.
            </li>
          </ul>
        </Experience>
      </ResumeContainer>
    </Section>
  )
}
export default Resume
