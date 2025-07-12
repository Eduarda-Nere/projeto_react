import React from 'react';
import {
    ModalOverlay,
    ModalContainer,
    ModalImage,
    ModalContent,
    ModalTitle,
    ModalDescription,
    ServesInfo,
    AddToCartButton,
    CloseButton
} from './styles';

interface FoodModalProps {
    image: string;
    name: string;
    description: string;
    price: number;
    serves: string;
    onClose: () => void;
    onAddToCart: () => void;
}

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
        <ModalOverlay>
            <ModalContainer>
                <CloseButton onClick={onClose} aria-label="Fechar modal">
                    ×
                </CloseButton>
                <ModalImage src={image} />
                <ModalContent>
                    <ModalTitle>{name}</ModalTitle>
                    <ModalDescription>{description}</ModalDescription>
                    <ServesInfo>Serve {serves} pessoa(s)</ServesInfo>
                    <AddToCartButton onClick={handleAddToCartClick}>
                        Adicionar ao carrinho - R$ {price.toFixed(2).replace('.', ',')}
                    </AddToCartButton>
                </ModalContent>
            </ModalContainer>
        </ModalOverlay>
    );
};

export default FoodModal;