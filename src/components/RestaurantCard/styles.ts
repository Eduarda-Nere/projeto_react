import styled from 'styled-components';

export const CardContainer = styled.div`
    width: 100%;
    max-width: 472px;
    border: 1px solid #e86464;
    position: relative;
    background-color: white;
    display: flex;
    flex-direction: column;
    height: 100%;
    margin: 0 auto;

    @media (max-width: 768px) {
        max-width: 400px;
    }

    @media (max-width: 576px) {
        max-width: 100%;
    }
`;

export const FoodImage = styled.div<{ src: string }>`
    background-image: url(${({ src }) => src});
    background-size: cover;
    background-position: center;
    height: 217px;
    width: 100%;
`;

export const FoodTypeTag = styled.span`
    position: absolute;
    top: 16px;
    right: 16px;
    background-color: #e86464;
    color: white;
    font-size: 12px;
    font-weight: bold;
    padding: 6px 10px;
`;

export const CardContent = styled.div`
    padding: 16px; 
    border-top: 1px solid #e86464;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`;

export const TitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px; 
`;

export const RestaurantTitle = styled.h3`
    color: #e86464;
    font-size: 18px;
    font-weight: bold;
    margin: 0; 
`;

export const RatingWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
`;

export const RatingNumber = styled.span`
    color: #e86464;
    font-size: 18px;
    font-weight: bold;
    font-family: 'Roboto';
`;

export const RatingStar = styled.span`
    color: #e86464;
    font-size: 18px;
    position: relative;
    top: -2px;  
`;

export const Description = styled.p`
    color: #e86464;
    font-size: 14px;
    line-height: 1.5;
    margin-bottom: 24px; 
    font-family: 'Roboto';
    flex-grow: 1; 
`;

export const KnowMoreButton = styled.button`
    background-color: #e86464;
    color: white;
    border: none;
    padding: 8px 16px; 
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    width: 120px; 
    height: 32px;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: flex-start; 
    margin-top: auto;
    transition: all 0.3s ease;

    &:hover {
        background-color: #d35454; 
        transform: scale(1.05);
    }
`;