import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../services/store';
import {
    HeaderContainer,
    NavContainer,
    CartLink,
    HeroImage,
    CategoryText,
    RestaurantTitle
} from './styles';


const RestaurantHeader: React.FC<{ title: string; category: string }> = ({ title, category }) => {
    const cartItems = useSelector((state: RootState) => state.cart.items);
    
    return (
        <HeaderContainer>
            <NavContainer>
                <Link to="/">Restaurantes</Link>
                <CartLink>{cartItems.length} produto(s) no carrinho</CartLink>
            </NavContainer>
            {<HeroImage>
                <CategoryText>{category}</CategoryText>
                <RestaurantTitle>{title}</RestaurantTitle>
            </HeroImage>}
        </HeaderContainer>
    );
};

export default RestaurantHeader;