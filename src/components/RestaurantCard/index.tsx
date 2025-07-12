import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    CardContainer,
    FoodImage,
    FoodTypeTag,
    CardContent,
    TitleWrapper,
    RestaurantTitle,
    RatingWrapper,
    RatingNumber,
    RatingStar,
    Description,
    KnowMoreButton
} from './styles';

interface RestaurantCardProps {
    id: number;
    image: string;
    foodType: string;
    title: string;
    rating: number;
    description: string;
}

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
        <CardContainer>
            <FoodImage src={image}>
                <FoodTypeTag>{foodType}</FoodTypeTag>
            </FoodImage>
            <CardContent>
                <TitleWrapper>
                    <RestaurantTitle>{title}</RestaurantTitle>
                    <RatingWrapper>
                        <RatingNumber>{rating.toFixed(1)}</RatingNumber>
                        <RatingStar>⭐</RatingStar>
                    </RatingWrapper>
                </TitleWrapper>
                <Description>{description}</Description>
                <KnowMoreButton 
                    as={Link} 
                    to={`/restaurante/${id}`} 
                    onClick={handleClick}
                >
                    {isLoading ? 'Carregando...' : 'Saiba mais'}
                </KnowMoreButton>
            </CardContent>
        </CardContainer>
    );
};

export default RestaurantCard;