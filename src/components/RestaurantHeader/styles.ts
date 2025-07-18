import styled from 'styled-components';

export const HeaderContainer = styled.header`
    width: 100%;
    
    @media (max-width: 768px) {
        position: relative;
    }
`;

export const NavContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 24px;
    background-image: url('/imagens/hero2.png');
    background-size: auto 240%;
    background-repeat: repeat-x;
    background-position: center;
    position: relative;
    height: 125px;

    @media (max-width: 768px) {
        padding: 16px;
        height: auto;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }
`;

export const NavContent = styled.div`
    display: flex;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 10px;
    }
`;

export const NavLink = styled.a`
    text-decoration: none;
    color: #e86464;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 18px;
    flex: 1;
    text-align: left;
`;

export const Logo = styled.img`
    height: 60px;
    margin: 0 40px;
`;

export const CartLink = styled.span`
    color: #e86464;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 18px;
    flex: 1;
    text-align: right;
`;

export const HeroImage = styled.div`
    background-size: cover;
    background-position: center;
    height: 250px;
    position: relative;
    padding: 30px;

    @media (max-width: 768px) {
        height: 180px;
        padding: 20px;
    }

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        z-index: 0;
    }
`;

export const CategoryText = styled.span`
    position: absolute;
    top: 30px;
    left: 14%;
    color: white;
    font-size: 30px;
    font-family: 'Montserrat', sans-serif;
    z-index: 1;

    @media (max-width: 768px) {
        left: 5%;
        font-size: 24px;
        top: 20px;
    }

    @media (min-width: 1600px) {
        left: 16%;
    }
`;

export const RestaurantTitle = styled.h1`
    position: absolute;
    bottom: 30px;
    left: 14%;
    color: white;
    font-size: 32px;
    font-weight: 700;
    font-family: 'Roboto', sans-serif;
    margin: 0;
    z-index: 1;

    @media (max-width: 768px) {
        left: 5%;
        bottom: 20px;
        font-size: 24px;
    }

    @media (min-width: 1600px) {
        left: 16%;
    }
`;

export const CartButton = styled.button`
    display: flex;
    align-items: center;
    gap: 8px;
    background: none;
    border: none;
    color: #e86464;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 18px;
    cursor: pointer;
    flex: 1;
    justify-content: flex-end;
    padding: 8px 0;
`;

export const CartIcon = styled.img`
    width: 24px;
    height: 24px;
`;
