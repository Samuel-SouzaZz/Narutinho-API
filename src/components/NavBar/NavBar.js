import React from "react";
import logo from "../../_assets/naruto-logo.png";
import { NavBarContainer, Logo, NarutoGif, LogoWrapper } from './Style';

export const NavBar = () => {
  return (
    <NavBarContainer>
      <NarutoGif 
        src="https://media.tenor.com/pf19SFYHd1IAAAAi/naruto-uzumaki.gif" 
        alt="Naruto" 
      />
      <LogoWrapper>
        <Logo src={logo} alt="Logo Naruto" />
      </LogoWrapper>
    </NavBarContainer>
  );
};
