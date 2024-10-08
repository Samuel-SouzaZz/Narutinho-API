import styled from "styled-components";

export const CharacterDetail = styled.div`
    width: 80vw;
    padding: 20px;
    display: flex;
    align-items: center; 
    background-image: url('https://images.stockcake.com/public/d/b/6/db6c3acb-c91d-4e64-9743-b1061ec91d9c_large/moonlit-swing-solitude-stockcake.jpg');
    background-size: cover; 
    background-position: center;
    background-repeat: no-repeat;

    & div {
        display: flex;
        flex-direction: column; 
        align-items: flex-start; 
        color: white; 
        margin-left: 20px;
    }

    & img {
        width: 300px;
        height: 230px;
        margin-right: 20px; 
    }

    & h3 {
        font-size: 25px;
        font-weight: bold;
        margin: 10px 0;
    }
    
    & label {
        font-size: 16px;
        font-weight: bold;
        margin: 5px 0; 
    }

    & span {
        font-size: 14px; 
        margin: 5px 0; 
    }

    & .close-button {
        color: red !important; 
        font-size: 20px;
        margin-bottom: 10px; 
        &:hover {
            opacity: 0.8; 
        }
    }
`;
