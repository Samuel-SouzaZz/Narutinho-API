import styled from "styled-components";
import { colors } from "../../constans/colors";

export const NavBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center; 
    background-color: black; /* Alterado para preto */
    padding: 10px 20px;
    box-shadow: 0 2px 2px 2px ${colors.paleGoldenrod};
    width: 100%; /* Garante que a barra ocupe toda a largura */
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
`;

export const SasukeGif = styled.img`
    width: 100px; 
    height: auto; 
`;
