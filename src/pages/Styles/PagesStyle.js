import styled from 'styled-components';
import { colors } from '../../constans/colors';

export const CharactersContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; 
    padding: 0px 20px;
`;

export const InputFilter = styled.input`
    margin-top: 20px;
    padding: 10px;
    border-radius: 4px;
    font-size: 15px;
    border: solid 1px ${colors.pumpkin};
    width: 300px;
    background-color: rgba(255, 255, 255, 0.7);
    color: black;

    &::placeholder {
        color: rgba(0, 0, 0, 0.5);
        opacity: 1;
    }

    &:focus {
        outline: none;
        border-color: ${colors.darkSlateGray};
    }
`;

export const LabelFilter = styled.label`
    color: black;
    margin-right: 5px;
    font-size: 18px;
    margin-bottom: 20px;
`;

export const ButtonPagination = styled.button`
    color: white;
    margin: 30px 20px;
    padding: 4px 2px;
    background-color: ${colors.darkSlateGray};
`;
