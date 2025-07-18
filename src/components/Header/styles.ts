import styled from 'styled-components';

export const HeaderContainer = styled.header`
    background-image: url('/imagens/fundo.png');
    background-size: auto 100%;  
    background-repeat: repeat-x;
    background-position: center top;
    height: 384px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

export const HeaderLogo = styled.img`
    width: 125px;
    margin-bottom: 20px;
    padding-bottom: 60px;
`;

export const HeaderTitle = styled.h1`
    font-family: 'Roboto', sans-serif;
    color: #e86464;
    font-size: 32px;
    font-weight: 900;
    max-width: 540px;
    padding: 0 20px;
    margin-top: 0;
`;