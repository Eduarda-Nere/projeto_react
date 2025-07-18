import styled from 'styled-components';

export const FoodCardContainer = styled.div`
    background-color: #e86464;
    overflow: hidden;
    width: 100%;
    max-width: 320px;
    color: white;
    display: flex;
    flex-direction: column;
    height: 100%;
    margin: 0 auto;

    @media (max-width: 768px) {
        max-width: 100%;
    }
`;

export const FoodImageWrapper = styled.div`
    padding: 9px;
    padding-bottom: 0;
    cursor: pointer;
    flex-shrink: 0;
`;

export const FoodImage = styled.div<{ src: string }>`
    background-image: url(${({ src }) => src});
    background-size: cover;
    background-position: center;
    height: 160px;
    width: 100%;
    overflow: hidden;

    @media (max-width: 576px) {
        height: 140px;
    }
`;

export const FoodContent = styled.div`
    padding: 9px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`;

export const FoodName = styled.h3`
    font-size: 18px;
    font-weight: 700;
    margin: 0 0 8px 0;
`;

export const FoodDescription = styled.p`
    font-size: 14px;
    line-height: 1.5;
    margin-bottom: 16px;
    flex-grow: 1;
`;

export const AddToCartButton = styled.button`
    background-color: #fcfaf3;
    color: #e86464;
    border: none;
    padding: 8px 16px;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    width: 100%;
    transition: all 0.3s ease;
    margin-top: auto;

    &:hover {
        background-color: #FFEBD9;
    }
`;
