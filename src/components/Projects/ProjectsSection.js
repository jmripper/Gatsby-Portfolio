import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { Link } from "gatsby"

const Section = styled.section`
  padding: 60px 0 40px;
  width: 100%;
  position: relative;
  background: #eef3f6;
`
const Container = styled.div`
  padding: 2rem 0;

  h2 {
    font-family: "Raleway", sans-serif;
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
  max-width: 1250px;
  @media (min-width:380px) {
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
  }

  p {
    font-family: "Raleway", sans-serif;
    font-weight: 400;
    text-align: left;
    text-rendering: optimizeLegibility;
    margin: 1rem;
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
    cursor: pointer;
  }
`

const Projects = props => {
  return (
    <Section>
      <Container>
        <h2>Projects</h2>
        <GridList>
          <GridItem>
            <div>
              <ProjectImage
                fluid={props.data.triviaImage.childImageSharp.fluid}
              />
            </div>
            <h3>Trivia Game</h3>
            <p>
              An interactive trivia game on the national parks built where a
              player get scored on the number of questions they get right. Built
              using HTML, CSS, and Vanilla JS..
            </p>
          </GridItem>
          <GridItem>
            <div>
              <ProjectImage
                fluid={props.data.movieImage.childImageSharp.fluid}
              />
            </div>
            <h3>jMDb</h3>
            <p>
              jMDb is a full-stack MERN application where one can view, add,
              update, and delete a movie. Built using MongoDB, Express,
              Mongoose, Node, HTML, CSS, and React.
            </p>
          </GridItem>
          <GridItem>
            <div>
              <ProjectImage
                fluid={props.data.triviaImage.childImageSharp.fluid}
              />
            </div>
            <h3>Tic-Tac-Toe</h3>
            <p>
              A user can play a game of Tic Tac Toe with the computer and choose
              whether they want to play as X or O. The game will reset once the
              reset button is clicked. Built using: Vanilla Javascript, HTML, &
              CSS.
            </p>
          </GridItem>
          <GridItem>
            <div>
              <ProjectImage
                fluid={props.data.triviaImage.childImageSharp.fluid}
              />
            </div>
            <h3>Trivia Game</h3>
            <p>
              An interactive trivia game on the national parks built using HTML,
              CSS, and Vanilla JS.
            </p>
          </GridItem>
          <GridItem>
            <div>
              <ProjectImage
                fluid={props.data.triviaImage.childImageSharp.fluid}
              />
            </div>
            <h3>Trivia Game</h3>
            <p>
              An interactive trivia game on the national parks built using HTML,
              CSS, and Vanilla JS.
            </p>
          </GridItem>
          <GridItem>
            <div>
              <ProjectImage
                fluid={props.data.triviaImage.childImageSharp.fluid}
              />
            </div>
            <h3>Trivia Game</h3>
            <p>
              An interactive trivia game on the national parks built using HTML,
              CSS, and Vanilla JS.
            </p>
          </GridItem>
        </GridList>
      </Container>
    </Section>
  )
}
export default Projects
