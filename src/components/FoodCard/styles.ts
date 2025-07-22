import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(280px, 320px));
    justify-content: center;
    gap: 32px;
    max-width: 1024px;
    margin: 0 auto;
    padding: 20px;
    box-sizing: border-box; 

    @media (max-width: 1080px) {
        grid-template-columns: repeat(auto-fit, minmax(280px, 320px));
    }

    @media (max-width: 720px) {
        grid-template-columns: minmax(280px, 1fr);
        width: 100%;
        padding: 20px 16px;
    }
`;

export const FoodCardContainer = styled.div`
    background-color: #e66767;
    overflow: hidden;
    width: 100%;
    max-width: 320px;
    height: 100%;
    color: #ffebd9;
    display: flex;
    flex-direction: column;
    margin: 0 auto; 
`;

export const FoodImageWrapper = styled.div`
    padding: 9px;
    padding-bottom: 0;
    cursor: pointer;
    flex-shrink: 0;
    width: 100%;
`;

export const FoodImage = styled.img`
    width: 100%;
    height: 160px;
    object-fit: cover;
    display: block;
`;

export const FoodContent = styled.div`
    padding: 16px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`;

export const FoodName = styled.h3`
    font-size: 16px;
    font-weight: 700;
    margin: 0 0 8px 0;
    color: #ffebd9;
`;

export const FoodDescription = styled.p`
    font-size: 14px;
    line-height: 1.5;
    margin-bottom: 15px;
    color: #ffebd9;
`;

export const AddToCartButton = styled.button`
    background-color: #ffebd9;
    color: #e66767;
    border: none;
    padding: 8px 16px;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    width: 100%;
    margin-top: auto;
`;
