import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from './styles';

const RestaurantCard: React.FC<RestaurantCardProps> = ({
    id,
    image,
    foodType,
    title,
    rating,
    description
}) => {
    const [isLoading, setIsLoading] = useState(false);

    const handleClick = () => {
        setIsLoading(true);
    };

    return (
        <S.CardContainer>
            <S.FoodImage src={image}>
                <S.FoodTypeTag>{foodType}</S.FoodTypeTag>
            </S.FoodImage>
            <S.CardContent>
                <S.TitleWrapper>
                    <S.RestaurantTitle>{title}</S.RestaurantTitle>
                    <S.RatingWrapper>
                        <S.RatingNumber>{rating.toFixed(1)}</S.RatingNumber>
                        <S.RatingStar>⭐</S.RatingStar>
                    </S.RatingWrapper>
                </S.TitleWrapper>
                <S.Description>{description}</S.Description>
                <S.KnowMoreButton 
                    as={Link} 
                    to={`/restaurante/${id}`} 
                    onClick={handleClick}
                >
                    {isLoading ? 'Carregando...' : 'Saiba mais'}
                </S.KnowMoreButton>
            </S.CardContent>
        </S.CardContainer>
    );
};

export default RestaurantCard;