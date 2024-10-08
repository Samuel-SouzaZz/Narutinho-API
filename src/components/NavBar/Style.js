import styled from "styled-components";
import { colors } from "../../constans/colors";

export const NavBarContainer = styled.div`
    display: flex;
    justify-content: space-between; /* Deixa o gif e o logo separados */
    align-items: center; /* Alinha verticalmente ao centro */
    background-color: ${colors.pumpkin};
    padding: 10px 20px;
    box-shadow: 0 2px 2px 2px ${colors.paleGoldenrod};
`;

export const Logo = styled.img`
    max-height: 40px; 
`;

export const LogoWrapper = styled.div`
    display: flex;
    flex-grow: 1; 
    justify-content: center; 
`;

export const NarutoGif = styled.img`
    width: 100px; 
    height: auto; 
    margin-right: 10px;
`;
