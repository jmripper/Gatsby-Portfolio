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
`
const ResumeContainer = styled.div`
  display: flex;
  flex-flow: column;
  font-family: "Raleway", sans-serif;
`

const Name = styled.h4`
  font-family: "Raleway", sans-serif;
  font-weight: 400;
  font-size: 2rem;
  display: block;

  span {
    font-size: 16px;
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
        Full-stack engineer, driven to create high-quality products with
        intuitive creative design and functionality. A team player who can
        quickly adapt, with an analytical mind and is self-motivated to discover
        new innovative solutions.
        <br />
        Experience: Software Engineering Immersive General Assembly | Washington
        D.C Nov. 2019 to Feb. 2020 Completed 500+ hour full-time immersive
        Software Engineering program that included object-oriented programming,
        MVC frameworks, data modeling, and test-driven applications.
        <br />
        Digital Marketing Manager EVERFI | Washington D.C Apr. 2019 to Oct. 2019
        Setup and managed 8 Facebook and Adwords campaigns and diagnosed all
        data routing discrepancies in Marketo and Salesforce CRM. Created new
        Wordpress pages and built out new custom components with HTML and CSS.
        <br />
        Marketing Analytics Manager UMGC | Adelphi, MD Jan. 2019 to Apr. 2019
        Examined PPC lead generation campaign to identify ways to decrease
        average cost-per-lead. Assembled data reports in Tableau to analyze
        previous TV and radio ratings and spend data.
        <br />
        Digital Marketing Strategist Membership Marketing Partners | Alexandria,
        VA Oct. 2015 to Dec. 2019 Built custom responsive email templates in
        HTML and CSS for automated email marketing campaigns. Used SQL database
        to query email segments of 3 million plus subscribers. Worked with
        developers to create new landing pages to improve mobile usability and
        implement SEO features to increase organic search rankings.
      </ResumeContainer>
    </Section>
  )
}
export default Resume
