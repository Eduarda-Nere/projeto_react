import React from 'react';
import * as S from './styles';

const FoodModal: React.FC<FoodModalProps> = ({
    image,
    name,
    description,
    price,
    serves,
    onClose,
    onAddToCart,
}) => {
    const handleAddToCartClick = () => {
        onAddToCart();
        onClose();
    };

    return (
        <S.ModalOverlay>
            <S.ModalContainer>
                <S.CloseButton onClick={onClose} aria-label="Fechar modal">
                    ×
                </S.CloseButton>
                <S.ModalImage src={image} />
                <S.ModalContent>
                    <S.ModalTitle>{name}</S.ModalTitle>
                    <S.ModalDescription>{description}</S.ModalDescription>
                    <S.ServesInfo>Serve {serves} pessoa(s)</S.ServesInfo>
                    <S.AddToCartButton onClick={handleAddToCartClick}>
                        Adicionar ao carrinho - R$ {price.toFixed(2).replace('.', ',')}
                    </S.AddToCartButton>
                </S.ModalContent>
            </S.ModalContainer>
        </S.ModalOverlay>
    );
};

export default FoodModal;