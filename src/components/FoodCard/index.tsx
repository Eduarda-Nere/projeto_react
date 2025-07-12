import React from 'react';
import {
    FoodCardContainer,
    FoodImageWrapper,
    FoodImage,
    FoodContent,
    FoodName,
    FoodDescription,
    AddToCartButton
} from './styles';

type FoodCardProps = {
    image: string;
    name: string;
    description: string;
    price: number;
    serves: string;
    onAddToCart: () => void;
    onImageClick: () => void;
};

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
        <FoodCardContainer>
            <FoodImageWrapper onClick={onImageClick}>
                <FoodImage src={image} />
            </FoodImageWrapper>
            <FoodContent>
                <FoodName>{name}</FoodName>
                <FoodDescription>{description}</FoodDescription>
                <AddToCartButton onClick={onAddToCart}>
                    Adicionar ao carrinho - R$ {price.toFixed(2).replace('.', ',')}
                </AddToCartButton>
            </FoodContent>
        </FoodCardContainer>
    );
};

export default FoodCard;