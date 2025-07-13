import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../services/store';
import * as S from './styles';

const RestaurantHeader: React.FC<RestaurantHeaderProps> = ({ title, category }) => {
    const cartItems = useSelector((state: RootState) => state.cart.items);
    
    return (
        <S.HeaderContainer>
            <S.NavContainer>
                <Link to="/" title='Ver restaurantes'>Restaurantes</Link>
                <S.CartLink title='Ir para o carrinho'>{cartItems.length} produto(s) no carrinho</S.CartLink>
            </S.NavContainer>
            {<S.HeroImage>
                <S.CategoryText>{category}</S.CategoryText>
                <S.RestaurantTitle>{title}</S.RestaurantTitle>
            </S.HeroImage>}
        </S.HeaderContainer>
    );
};

export default RestaurantHeader;