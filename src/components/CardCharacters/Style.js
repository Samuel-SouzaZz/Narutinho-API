import styled from 'styled-components';
import { colors } from '../../constans/colors';

export const CharactersCard = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); 
    gap: 24px; 
    width: 100%;
    margin: 60px 0;
    padding: 0 20px;
`;

export const CharacterItem = styled.div`
    width: 100%; 
    box-sizing: border-box;
    text-align: center;
    background-color: ${colors.pumpkin};
    padding: 16px;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s, box-shadow 0.3s;

    &:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    }

    & img {
        width: 100%; /* Garante que a imagem preencha a largura do contêiner */
        height: 200px; /* Altura fixa para manter consistência */
        object-fit: cover; /* Ajusta a imagem para preencher sem distorcer */
        border-radius: 8px;
        margin-bottom: 8px;
    }

    & h3 {
        font-size: 1.2rem;
        color: ${colors.white};
        margin: 8px 0; /* Espaçamento superior e inferior */
    }
`;
