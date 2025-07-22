import React from 'react';
import * as S from './styles';

interface FoodCardProps {
    image: string;
    name: string;
    description: string;
    onAddToCart: () => void;
    onImageClick: () => void;
}

const FoodCard: React.FC<FoodCardProps> = ({
    image,
    name,
    description,
    onAddToCart,
    onImageClick
}) => {
    return (
        <S.FoodCardContainer>
        <S.FoodImageWrapper onClick={onImageClick}>
            <S.FoodImage src={image} alt={name} />
        </S.FoodImageWrapper>
        <S.FoodContent>
            <S.FoodName>{name}</S.FoodName>
            <S.FoodDescription>{description}</S.FoodDescription>
            <S.AddToCartButton onClick={onAddToCart}>
                Adicionar ao carrinho
            </S.AddToCartButton>
        </S.FoodContent>
        </S.FoodCardContainer>
    );
};

export default FoodCard;
