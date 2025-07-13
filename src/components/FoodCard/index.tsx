import React from 'react';
import * as S from './styles';

const FoodCard: React.FC<FoodCardProps> = ({
    image,
    name,
    description,
    price,
    serves,
    onAddToCart,
    onImageClick
}) => {
    return (
        <S.FoodCardContainer>
            <S.FoodImageWrapper onClick={onImageClick}>
                <S.FoodImage src={image} />
            </S.FoodImageWrapper>
            <S.FoodContent>
                <S.FoodName>{name}</S.FoodName>
                <S.FoodDescription>{description}</S.FoodDescription>
                <S.AddToCartButton onClick={onAddToCart}>
                    Adicionar ao carrinho - R$ {price.toFixed(2).replace('.', ',')}
                </S.AddToCartButton>
            </S.FoodContent>
        </S.FoodCardContainer>
    );
};

export default FoodCard;