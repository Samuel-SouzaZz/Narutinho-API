import React from "react";
import logo from "../../_assets/naruto-logo.png";
import { NavBarContainer, Logo, NarutoGif, SasukeGif, LogoWrapper } from './Style';

export const NavBar = () => {
  return (
    <NavBarContainer>
      <NarutoGif 
        src="https://i.pinimg.com/originals/ab/0f/af/ab0fafe8753a97c199a10b353ec6a8bb.gif" 
        alt="Naruto" 
      />
      <LogoWrapper>
        <Logo src={logo} alt="Logo Naruto" />
      </LogoWrapper>
      <SasukeGif 
        src="https://i.pinimg.com/originals/bd/22/c5/bd22c5644c600532c3370b63134a2d35.gif" 
        alt="Sasuke" 
      />
    </NavBarContainer>
  );
};
