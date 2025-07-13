import styled from 'styled-components';

export const FooterContainer = styled.footer`
    background-color: #fcecdc;
    padding: 40px 0;
    text-align: center;
`;

export const Logo = styled.img`
    max-width: 150px;
    margin-bottom: 32px;
    display: inline;
`;

export const SocialIcons = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 100px;
`;

export const SocialIcon = styled.img`
    width: 48px; 
    height: 35px;
    transition: all 0.3s ease;
    object-fit: contain;
    cursor: pointer;

    &:hover {
        transform: scale(1.1);
        opacity: 0.9;
    }
`;

export const FooterText = styled.p`
    color: #e86464;
    font-size: 14px;
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.5;
    padding: 0 20px;
`;