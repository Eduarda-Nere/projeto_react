import React from 'react';
import * as S from './styles';

interface FoodCardProps {
    image: string;
    name: string;
    description: string;
    onOpenModal: () => void;
    onImageClick: () => void;
}

const FoodCard: React.FC<FoodCardProps> = ({
    image,
    name,
    description,
    onOpenModal,  
    onImageClick
}) => {
    const handleAddToCartClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        onOpenModal();
    };

    return (
        <S.FoodCardContainer>
            <S.FoodImageWrapper onClick={onImageClick}>
                <S.FoodImage src={image} alt={name} />
            </S.FoodImageWrapper>
            <S.FoodContent>
                <S.FoodName>{name}</S.FoodName>
                <S.FoodDescription>{description}</S.FoodDescription>
                <S.AddToCartButton onClick={handleAddToCartClick}>
                    Adicionar ao carrinho
                </S.AddToCartButton>
            </S.FoodContent>
        </S.FoodCardContainer>
    );
};

export default FoodCard;
