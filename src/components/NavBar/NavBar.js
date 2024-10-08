import React from "react";
import logo from "../../_assets/naruto-logo.png";
import { NavBarContainer, Logo, NarutoGif } from './Style';

export const NavBar = () => {
  return (
    <NavBarContainer>
      <Logo src={logo} alt="Logo Naruto" />
      <NarutoGif 
        src="https://media.tenor.com/pf19SFYHd1IAAAAi/naruto-uzumaki.gif" 
        alt="Naruto" 
      />
    </NavBarContainer>
  );
};
