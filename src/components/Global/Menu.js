import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Nav = styled.nav`
  transition: max-height 0.56s cubic-bezier(0.52, 0.16, 0.24, 1),
    background 0.3s, border 0.3s;
  padding: 0 2em;
  background-color: #ffffff;
  position: fixed;
  font-family: "Raleway", sans-serif;
  border-bottom: 1px solid #f2f2f2;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 99;
  overflow-y: hidden;
  overscroll-behavior: contain;
  max-height: ${props => (props.open ? "100%" : "60px")};
  @media screen and (min-width: 800px) {
    /* background: transparent; */
    /* border-bottom: 1px solid #f2f2f2; */
    display: flex;
    flex-flow: row;
    justify-content: flex-end;
  }
`

const Name = styled.div`
  font-family: "Raleway" sans-serif;
  color: #131313;
  font-size: 26px;
  line-height: 34px;
  width: 300px;
  max-width: 300px;
  position: relative;
  top: 15px;
  right: 0;
  bottom: 10px;
  left: 0;

  a {
    text-decoration: none;
    color: #131313;
  }
`

const Toggle = styled.div`
  position: absolute;
  z-index: 999;
  padding: 0;
  top: 15px;
  margin: 0;
  transition: transform 0.3s;
  right: 1em;
  @media screen and (min-width: 800px) {
    display: none;
  }
  div:first-child {
    transform: rotate(${props => (props.open ? "45deg" : "0")});
    top: ${props => (props.open ? "15px" : "23px")};
  }
  div:nth-child(2n) {
    opacity: ${props => (props.open ? "0" : "1")};
  }
  div:nth-child(3n) {
    transform: rotate(${props => (props.open ? "-45deg" : "0")});
    bottom: ${props => (props.open ? "16px" : "23px")};
  }
`
const Overlay = styled.div`
  background: #131313;
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  transition: 0.56s cubic-bezier(0.52, 0.16, 0.24, 1) all;
  opacity: ${props => (props.open ? ".8" : "0")};
  visibility: ${props => (props.open ? "visible" : "hidden")};
  display: block;
  @media screen and (min-width: 800px) {
    display: none;
  }
`

const StyledBurger = styled.button`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 3.5rem;
  height: 2rem;
  float: right;
  cursor: pointer;
  background: transparent;
  border: none;
  div {
    transition: all 0.3s;
    position: absolute;
    display: block;
    background: ${props => (props.open ? "white" : "#131313")};
    width: 50%;
    height: 2px;
    left: 30%;
  }
`

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 4em 0 0 1em;
  display: flex;
  flex-flow: column;
  align-items: center;
  @media (min-width: 800px) {
    padding: 0em;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
  a {
    font-family: "Raleway", sans-serif;
    position: relative;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 1.5em;
    text-decoration: none;
    transition: opacity 0.3s;
    color: #131313;
    border-bottom: 1px solid transparent;
    @media screen and (min-width: 800px) {
      font-size: 0.85em;
      letter-spacing: 0.8px;
      height: 56px;
      padding: 0 0 0.1em 0;
    }
    &:hover {
      opacity: 0.7;
      text-decoration: underline;
    }
    @media (hover: none) {
      opacity: 1 !important;
    }
  }
`
const Item = styled.li`
  transition: opacity 0.56s cubic-bezier(0.52, 0.16, 0.24, 1),
    transform 0.56s cubic-bezier(0.52, 0.16, 0.24, 1);
  margin-bottom: 1.25em;
  width: 100%;
  @media screen and (min-width: 800px) {
    display: inline-block;
    transform: none;
    transition: none;
    opacity: 1 !important;
    margin: 0 0 0 1.25em;
    width: auto;
  }
`

const NavBar = props => {
  const [isOpen, setIsOpen] = useState(false)
  const [isTop, setIsTop] = useState(true)

  function toggleMenu() {
    setIsOpen(!isOpen)
  }

  function closeMenu() {
    setIsOpen(false)
  }

  function handleScroll() {
    setIsTop(!window.pageYOffset)
  }

  function handleLinkClick() {
    setIsOpen(false)
  }

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll)
  //   return () => window.removeEventListener("scroll", handleScroll)
  // }, [])

  return (
    <div className={isTop ? "top" : "scrolled"}>
      <Overlay open={isOpen} />
      <Nav open={isOpen} id="nav" role="navigation">
        <Name>
          <Link to="/">Jenny Lothstein</Link>
        </Name>
        <Toggle open={isOpen} aria-label="Toggle Menu">
          <StyledBurger onClick={toggleMenu}>
            <div />
            <div />
            <div />
          </StyledBurger>
        </Toggle>
        <List open={isOpen} {...props}>
          <Item>
            <Link to="/about" onClick={closeMenu} {...props}>
              About
            </Link>
          </Item>
          <Item>
            <Link to="/projects" onClick={closeMenu} {...props}>
              Projects
            </Link>
          </Item>
          <Item>
            <Link to="/resume" onClick={closeMenu} {...props}>
              Resume
            </Link>
          </Item>
          <Item>
            <Link to="/contact" onClick={closeMenu} {...props}>
              Contact
            </Link>
          </Item>
        </List>
      </Nav>
    </div>
  )
}

export default NavBar
