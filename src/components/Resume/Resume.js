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
    font-size: 2em;
    margin: 1em auto;
    padding: 0;
  }

  hr {
    height: 10px;
    background: #f4f4f4;
    width: 100%;
    border: none;
  }

  a {
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
  display: flex;
  flex-flow: column;
  padding-top: 15px;

  h4 {
    font-family: "Raleway", sans-serif;
    color: #000000;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    text-decoration: underline;
    margin: 0;
    padding: 0;
  }
`
const Title = styled.p`
  font-weight: 400;
  margin: 0;
  padding: 15px 0 0 0;
  font-size: 16px;
  line-height: 22px;
`

const SubTitle = styled.p`
  font-weight: 300;
  margin: 0;
  padding: 0 0 10px 0;
  font-size: 16px;
  line-height: 22px;
  font-style: italic;
  font-family: "Raleway", sans-serif;

  span {
    text-decoration: none;
    font-family: inherit;
    font-weight: 300;
    margin: 0;
    padding: 0;
    font-size: 16px;
    line-height: 22px;
    font-style: normal;
    display: block;
  }
`

const ExperienceList = styled.ul`
  margin: 0;
  font-family: "Raleway", sans-serif;

  li {
    text-align: left;
    font-family: inherit;
    font-size: 16px;
    line-height: 22px;
    color: #000000;
    font-weight: 300;
    text-decoration: none;
    padding-bottom: 5px;
  }
`

const Skills = styled.div`
  display: flex;
  flex-flow: column;

  h4 {
    font-family: "Raleway", sans-serif;
    color: #000000;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    text-decoration: underline;
    margin: 0;
    padding: 0;
  }
`

const SkillsList = styled.ul`
  margin: 0;
  font-family: "Raleway", sans-serif;
  list-style: none;
  padding: 10px 0 0 0;
  margin: 0;

  li {
    text-align: left;
    font-family: inherit;
    font-size: 16px;
    line-height: 22px;
    color: #000000;
    font-weight: 300;
    text-decoration: none;
    padding-bottom: 5px;
  }

  li:first-child {
    font-weight: 600;
  }
`

const Education = styled.div`
  display: block;
  padding-top: 15px;
  margin: 0;

  h4 {
    font-family: "Raleway", sans-serif;
    color: #000000;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    text-decoration: underline;
    margin: 0;
    padding: 0 0 15px 0;
  }

  p {
    margin: 0;
    padding: 0;
    font-family: "Raleway", sans-serif;
    color: #000000;
    font-size: 16px;
    line-height: 22px;
    font-weight: 300;
  }

  p:nth-child(6n) {
    padding: 15px 0 0 0;
  }
`

const Download = styled.a`
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
  background-color: #000067;
  font-family: "Raleway", sans-serif;
  color: #ffffff;
  font-size: 18px;

  &:hover {
    background-color: #0000a2;
    border: 4px solid #0000a2;
    text-decoration: underline;
  }
`

const Resume = props => {
  return (
    <Section>
      <h3>Resume:</h3>
      <Download href="/Ripper_Resume.pdf" target="_blank">
          Download
      </Download>
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
        <Skills>
          <h4>SKILLS</h4>
          <SkillsList>
            <li>Languages</li>
            <li>HTML, CSS, Javascript, Python</li>
          </SkillsList>
          <SkillsList>
            <li>Web Technologies</li>
            <li>React, Node, Express, SEO, JSON, Git, Gatsby, GraphQL</li>
          </SkillsList>
          <SkillsList>
            <li>Databases</li>
            <li>MySQL, MongoDB, Mongoose, PostgreSQL</li>
          </SkillsList>
          <SkillsList>
            <li>Design</li>
            <li>Photoshop, Illustrator, Adobe XD, Dreamweaver</li>
          </SkillsList>
          <SkillsList>
            <li>Data Analysis</li>
            <li>Google Analytics, Google Tag Manager, Tableau</li>
          </SkillsList>
        </Skills>
        <Experience>
          <h4>EXPERIENCE:</h4>
          <Title>Software Engineering Immersive</Title>
          <SubTitle>
            General Assembly | Washington D.C
            <span>Nov. 2019 to Feb. 2020</span>
          </SubTitle>
          <ExperienceList>
            <li>
              Completed 500+ hour full-time immersive Software Engineering
              program that included object-oriented programming, MVC frameworks,
              data modeling, and test-driven applications.
            </li>
          </ExperienceList>
        </Experience>
        <Experience>
          <Title>Digital Marketing Manager</Title>
          <SubTitle>
            EVERFI | Washington D.C
            <span>Apr. 2019 to Oct. 2019</span>
          </SubTitle>
          <ExperienceList>
            <li>
              Setup and managed 8 Facebook and Adwords campaigns and diagnosed
              all data routing discrepancies in Marketo and Salesforce CRM.
            </li>
            <li>
              Created new Wordpress pages and built out new custom components
              with HTML and CSS.
            </li>
          </ExperienceList>
        </Experience>
        <Experience>
          <Title>Marketing Analytics Manager</Title>
          <SubTitle>
            UMGC | Adelphi, MD
            <span>Jan. 2019 to Apr. 2019</span>
          </SubTitle>
          <ExperienceList>
            <li>
              Examined PPC lead generation campaign to identify ways to decrease
              average cost-per-lead.
            </li>
            <li>
              Assembled data reports in Tableau to analyze previous TV and radio
              ratings and spend data.
            </li>
          </ExperienceList>
        </Experience>
        <Experience>
          <Title>Digital Marketing Strategist</Title>
          <SubTitle>
            Membership Marketing Partners | Alexandria, VA
            <span>Oct. 2015 to Dec. 2019</span>
          </SubTitle>
          <ExperienceList>
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
          </ExperienceList>
        </Experience>
        <Education>
          <h4>EDUCATION</h4>
          <p>Software Engineering Immersive</p>
          <p>General Assembly</p>
          <p>Washington D.C.</p>
          <p>Nov. 2019 to Feb. 2020</p>
          <p>Bachelor of Arts</p>
          <p>Ohio Wesleyan University</p>
          <p>Delaware, Ohio</p>
          <p>Aug. 2010 to May 2014</p>
        </Education>
      </ResumeContainer>
    </Section>
  )
}
export default Resume
