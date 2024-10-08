import styled from "styled-components";

export const CharacterDetail = styled.div`
    width: 80vw;
    max-width: 1200px; 
    padding: 20px;
    display: flex;
    justify-content: space-between; 
    align-items: center;
    background-color: #f9f9f9; 
    border-radius: 10px; 
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); 

    & div {
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 10px; 
    }

    & span {
        display: flex;
        margin-top: 10px;
        font-size: 14px; 
        color: #666; 
    }

    & img {
        width: 100%;
        max-width: 300px; 
        height: auto; 
        border-radius: 10px; 
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); 
    }

    & h3 {
        font-size: 24px; 
        color: #333;
        font-weight: 600;
        margin: 10px 0;
    }

    & label {
        font-size: 16px;
        color: #555; 
        font-weight: 500; 
    }
`;
