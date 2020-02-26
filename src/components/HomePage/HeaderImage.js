import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  height: calc(100vh - 70px);
  overflow: hidden;
  @media (min-width: 800px) {
    height: 100vh;
  }
`

const CoverImg = styled(Img)`
  position: absolute !important;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  height: 100vh;
  & > img {
    object-fit: cover !important;
    object-position: 50% 50% !important;
  }
  &::before {
    content: "";
    background: rgba(0, 0, 0, 0.3);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
  }
`

const Box = styled.div`
  text-align: center;
  padding: 60px 1.5rem 0;
  z-index: 5;
  height: 100%;
  width: 100%;
  position: relative;
  margin: 0 auto;
`

const Container = styled.div`
  display: flex;
  flex-flow: column;
  position: relative;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

const Title = styled.h2`
  font-family: "Raleway", sans-serif;
  font-weight: 500;
  color: #ffffff;
  z-index: 5;
  font-size: 3.2em;
  margin: 0;
  @media screen and (min-width: 800px) {
    font-size: 5.5em;
  }
`
const SubTitle = styled.h3`
  font-family: "Raleway", sans-serif;
  font-weight: 400;
  color: #ffffff;
  z-index: 5;
  padding: 0;
  margin: 1rem auto;
  font-size: 1.2em;
  line-height: 1.3;
  display: inline-block;
  width: 100%;
  width: auto;
  @media screen and (min-width: 800px) {
    font-size: 1.5em;
    padding: 0;
    width: 100%;
  }
`

const HeaderImage = props => {
  return (
    <Wrapper>
      <CoverImg
        fluid={props.data.coverImg.childImageSharp.fluid}
        backgroundColor={"#f7f7f7"}
      />
      <Box>
        <Container>
          <Title>Aloha, I'm Jenny</Title>
          <SubTitle>I'm a digital marketer turned developer.</SubTitle>
        </Container>
      </Box>
    </Wrapper>
  )
}
export default HeaderImage
