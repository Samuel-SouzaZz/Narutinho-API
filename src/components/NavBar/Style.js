import styled from "styled-components";
import { colors } from "../../constans/colors";

/* Container da NavBar, os itens são organizados em flex */
export const NavBarContainer = styled.div`
    display: flex;
    justify-content: space-between; /* Deixa o gif e o logo separados */
    align-items: center; /* Alinha verticalmente ao centro */
    background-color: ${colors.pumpkin};
    padding: 10px 20px;
    box-shadow: 0 2px 2px 2px ${colors.paleGoldenrod};
`;

/* Tamanho máximo para o logotipo */
export const Logo = styled.img`
    max-height: 40px; 
`;

/* Wrapper para centralizar o logo */
export const LogoWrapper = styled.div`
    display: flex;
    flex-grow: 1; /* Faz o logo ocupar o espaço central */
    justify-content: center; /* Centraliza o logo no espaço disponível */
`;

/* Gif no início, sem alteração de estilo */
export const NarutoGif = styled.img`
    width: 100px; 
    height: auto; 
    margin-right: 10px; /* Um pouco de espaço entre o gif e o logo */
`;
