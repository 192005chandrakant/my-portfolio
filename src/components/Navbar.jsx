import React, { useState } from "react";
import { Link as LinkR } from "react-router-dom";
import Styled, { useTheme } from "styled-components";
import { Bio } from "../data/data/constants";
import { MenuRounded } from "@mui/icons-material";
import { DiCssdeck } from 'react-icons/di';
const Nav = Styled.div`
  background-color: ${({ theme }) => theme.bg};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  color: white;
    @media (max-width: 960px) {
        trastion: 0.8s all ease;
    }
`;

const NavbarContainer = Styled.div`
width:100% ;
max-width : 1200px;
padding :0 24px ;
display: flex;
align-items: center;
justify-content: space-between;
font-size: 1rem;


`;
const NavLogo = Styled(LinkR)` 
width:20%;
pading: 0 6px;
font-weight:500;
font-size:18px;
text-decoration: none;
color:inherit;
   @media (max-width: 640px) {
      padding: 0 0px;
  }

`;
const NavItems = Styled.ul`
width:100%;
display:flex;
align-items:center;
justify-content:center;
gap:32px;
padding: 0 6px ;
list-style:none;

@media screen and (max-width:768px){
display:none;
}
`;

const NavLink = Styled.a`
color:${({ theme }) => theme.text_primary};
font-weight:500;
cursor:pointer;
transition :all 0.2s ease-in-out ;
text-decoration:none ;
&:hover {
color:${({ theme }) => theme.primary};
}
 &.active {
      border-bottom: 2px solid ${({ theme }) => theme.primary};
    }
`;
const ButtonContainer = Styled.div`
width:40%;
height:100%
display:flex;
justify-content:end;
align-items:center;
padding: 0 6px;
@media screen and (max-width:768px){
display:none;
}

`;
const GithubButton = Styled.a`
  border: 1px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.6s ease-in-out;
  text-decoration: none;
  &:hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.text_primary};
  }
    @media screen and (max-width: 768px) { 
    font-size: 14px;
    }
`;

const MobileIcon = Styled.div`
height:100%;
display:flex;
align-items:center;
color: ${({ theme }) => theme.text_primary};
display:none;
@media screen and (max-width:768px){
display:block;
`;
const MobileMenu = Styled.ul`
width:100%;
display:flex;
flex-direction:column;
align-items:start;
gap:16px;
padding: 0 6px ;
list-style:none;
width:100% ;
padding:12px 40px 24px 40px ;
background:${({ theme }) => theme.card_light + 99} ;
position:absolute;
top:80px;
right:0;

 transition: all 0.6s ease-in-out;
  transform: ${({ isOpen }) =>
    isOpen ? "translateY(0)" : "translateY(-100%)"};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  z-index: ${({ isOpen }) => (isOpen ? "1000" : "-1000")};
`;
const Span = Styled.div`
    padding: 0 4px;
    font-weight: bold;
    font-size: 18px;
`;
const Navbar = () => {
  const [isOpen, setIsOpen] =  React.useState(false);
  const theme = useTheme();
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">   <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20;', cursor: 'pointer' }}>
         <DiCssdeck size="3rem" /> <Span>Portfolio</Span>  </a></NavLogo>

        <MobileIcon  onClick={() => setIsOpen(!isOpen)}>
       
          <MenuRounded style={{ color: "inherit" }} />
        </MobileIcon>

        <NavItems>
        <NavLink href="/">About</NavLink>
          <NavLink href="#Skills">Skills</NavLink>
          {/* <NavLink href="#Experience">Experience</NavLink> */}
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#Education">Education</NavLink>
        </NavItems>
        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <NavLink onClick={() => setIsOpen(!isOpen)} href="/">
              About
            </NavLink>
            <NavLink onClick={() => setIsOpen(!isOpen)} href="#Skills">
              Skills
            </NavLink>
            {/* <NavLink onClick={() => setIsOpen(!isOpen)} href="#Experience">
              Experience
            </NavLink> */}
            <NavLink onClick={() => setIsOpen(!isOpen)} href="#projects">
              Projects
            </NavLink>
            <NavLink onClick={() => setIsOpen(!isOpen)} href="#Education">
              Education
            </NavLink>
            <GithubButton
              href={Bio.github}
              target="_Blank"
              style={{ background: theme.primary, 
                color: theme.text_primary }}
            >
              Github Profile
            </GithubButton>
          </MobileMenu>
        )}

        <ButtonContainer>
          <GithubButton href={Bio.github} target="_Blank">
            Github Profile
          </GithubButton>
        </ButtonContainer>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
