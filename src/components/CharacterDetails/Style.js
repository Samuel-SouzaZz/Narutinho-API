import styled from "styled-components";

export const CharacterDetail = styled.div`
    width: 80vw;
    padding: 20px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-image: url('https://images.stockcake.com/public/d/b/6/db6c3acb-c91d-4e64-9743-b1061ec91d9c_large/moonlit-swing-solitude-stockcake.jpg');
    background-size: cover; /* Ajusta a imagem para cobrir o elemento */
    background-position: center; /* Centraliza a imagem */
    background-repeat: no-repeat; /* Evita a repetição da imagem */

    & div {
        width: 100%;
        display: flex;
        flex-direction: column;
        color: white; /* Muda a cor do texto para branco para melhor contraste */
    }
    & span {
        display: flex; 
        cursor: pointer; /* Altera o cursor para indicar que é clicável */
    }
    & img {
        width: 300px;
        height: 230px;
    } 
    & h3 {
        font-size: 25px;
        font-weight: bold;
    }
    & label {
        font-size: 16px;
        font-weight: bold;
    }

    /* Estilo específico para o 'X' */
    & .close-button {
        color: red; /* Define a cor do 'X' como vermelho */
        font-size: 20px; /* Ajusta o tamanho da fonte do 'X' */
        margin-bottom: 10px; /* Adiciona uma margem inferior para espaçamento */
    }
`;
