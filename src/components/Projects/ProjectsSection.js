import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const Section = styled.section`
  padding: 60px 0 40px;
  width: 100%;
  position: relative;
  background: #eef3f6;
`
const Container = styled.div`
  padding: 2rem 0;

  h2 {
    font-family: "Abril Fatface", cursive;
    font-weight: 400;
    margin: 0 auto 1em;
    text-align: center;
    font-size: 2.5rem;
    line-height: 1.3em;
  }
`

const GridList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 1.5rem;
  list-style: none;
  margin: 0 auto;
  padding: 0;
  max-width: 950px;
  @media (min-width: 380px) {
    padding: 0 1.5rem;
  }
`

const GridItem = styled.li`
  margin: 0 0 1.5em;
  border: thin solid rgba(51, 183, 176, 0.1);
  background-color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  overflow: hidden;
  position: relative;

  h3 {
    font-family: "Raleway", sans-serif;
    font-weight: 400;
    margin: 1rem;
    text-align: left;
    text-rendering: optimizeLegibility;
    text-decoration: underline;
    font-size: 1.4em;
  }

  p {
    font-family: "Raleway", sans-serif;
    font-weight: 400;
    text-align: left;
    text-rendering: optimizeLegibility;
    margin: 1em 1em 2em;
    font-size: 16px;
    line-height: 22px;
  }

  a {
    color: #000000;

    &:hover {
      cursor: pointer;
    }
  }
`

const ProjectImage = styled(Img)`
  height: 100%;
  top: -8px;
  position: relative;
  transform: skewY(-2.2deg);
  transition: all 0.5s ease-in-out 0s;
  object-fit: cover;

  &:hover {
    transform: scale(1.1);
  }
`

const Projects = props => {
  return (
    <Section>
      <Container>
        <h2>Projects:</h2>
        <GridList>
          <GridItem>
            <div>
              <ProjectImage
                fluid={props.data.triviaImage.childImageSharp.fluid}
                alt="National Parks Trivia Game"
              />
            </div>
            <a
              href="https://jmripper.github.io/National_Parks_Trivia/"
              target="_blank"
            >
              <h3>Trivia Game</h3>
            </a>
            <p>
              An interactive trivia game on the national parks built where a
              player get scored on the number of questions they get right. Built
              using HTML, CSS, and Vanilla JS.{" "}
              <a
                href="https://github.com/jmripper/National_Parks_Trivia"
                target="_blank"
              >
                Repo
              </a>
            </p>
          </GridItem>
          <GridItem>
            <div>
              <ProjectImage
                fluid={props.data.movieImage.childImageSharp.fluid}
                alt="jMdB Screenshot"
              />
            </div>
            <a href="https://jmdb.netlify.com/" target="_blank">
              <h3>jMDb</h3>
            </a>
            <p>
              jMDb is a full-stack MERN application where one can view, add,
              update, and delete a movie. Built using MongoDB, Express,
              Mongoose, Node, HTML, CSS, and React.{" "}
              <a href="https://github.com/jmripper/jMDb" target="_blank">
                Repo
              </a>
            </p>
          </GridItem>
          <GridItem>
            <div>
              <ProjectImage
                fluid={props.data.tictactoeImage.childImageSharp.fluid}
                alt="Tic-Tac-Toe Game"
              />
            </div>
            <a href="https://jmripper.github.io/tic-tac-toe/" target="_blank">
              <h3>Tic-Tac-Toe</h3>
            </a>
            <p>
              A user can play a game of Tic Tac Toe with the computer. The game
              will reset once the reset button is clicked. Built using: Vanilla
              Javascript, HTML, & CSS.{" "}
              <a href="https://github.com/jmripper/tic-tac-toe" target="_blank">
                Repo
              </a>
            </p>
          </GridItem>
          <GridItem>
            <div>
              <ProjectImage
                fluid={props.data.modernTImage.childImageSharp.fluid}
              />
            </div>
            <h3>Modern Trousseau</h3>
            <p>
              A JAMstack client wedding gown website built using Gatsby, React,
              Node, Styled Components, Storybook and Contentful CMS.{" "}
              <a
                href="https://github.com/jserrao/modern-trousseau-gatsby"
                target="_blank"
              >
                Repo
              </a>
            </p>
          </GridItem>
          <GridItem>
            <div>
              <ProjectImage
                fluid={props.data.covidImage.childImageSharp.fluid}
              />
            </div>
            <a href="https://covid19tracker-app.netlify.com/" target="_blank">
              <h3>Covid-19 Country Tracker</h3>
            </a>
            <p>
              A page built with React, Axios, Styled Components, and Chart.js to
              show the number of infected, recovered, and dealths by country of
              Covid-19 pandemic.{" "}
              <a
                href="https://github.com/jmripper/covid19-tracker"
                target="_blank"
              >
                Repo
              </a>
            </p>
          </GridItem>
        </GridList>
      </Container>
    </Section>
  )
}
export default Projects
