import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getRestaurantById } from '../services/api';
import {
    HeaderContainer,
    NavContainer,
    NavContent,
    Logo,
    NavLink,
    HeroImage,
    CategoryText,
    RestaurantTitle,
    CartButton,
    CartIcon
} from '../components/RestaurantHeader/styles';
import FoodCard from '../components/FoodCard';
import styled from 'styled-components';
import Footer from '../components/Footer';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../services/store';
import { addItem } from '../services/cartSlice';
import FoodModal from '../components/FoodModal';
import LoadingPage from '../components/LoadingPage';

const FoodListContainer = styled.div`
    background-color: #fcfaf3;
    padding: 40px 200px 210px;

    @media (max-width: 1200px) {
        padding: 40px 100px 210px;
    }

    @media (max-width: 768px) {
        padding: 40px 20px 210px;
    }
`;

const FoodGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
    margin-top: 40px;

    @media (max-width: 1200px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

interface MenuItem {
    id: number;
    nome: string;
    descricao: string;
    preco: number;
    porcao: string;
    foto: string;
}

interface RestaurantDetailsProps {
    onCartClick: () => void;
    onModalOpen: () => void;
}

const RestaurantDetails: React.FC<RestaurantDetailsProps> = ({ onCartClick, onModalOpen }) => {
    const { id } = useParams<{ id: string }>();
    const [restaurant, setRestaurant] = useState<{
        id: number;
        titulo: string;
        tipo: string;
        capa: string;
        cardapio: MenuItem[];
    } | null>(null);
    const [loading, setLoading] = useState(true);
    const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchRestaurant = async () => {
            try {
                const data = await getRestaurantById(id!);
                setRestaurant(data);
            } catch (error) {
                console.error('Error fetching restaurant:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchRestaurant();
    }, [id]);

    const handleAddToCart = (item: MenuItem) => {
        dispatch(addItem({
            id: item.id,
            name: item.nome,
            price: item.preco,
            image: item.foto
        }));
        onCartClick();
    };

    const handleImageClick = (item: MenuItem) => {
        onModalOpen(); 
        setSelectedItem(item); 
    };

    const handleCloseModal = () => {
        setSelectedItem(null);
    };

    if (loading) {
        return <LoadingPage />;
    }

    if (!restaurant) {
        return <div>Restaurante não encontrado</div>;
    }

    return (
        <>
            <HeaderContainer>
                <NavContainer>
                    <NavContent>
                        <NavLink href="/">Restaurantes</NavLink>
                        <Logo src="/imagens/logo.png" alt="Logo" />
                        <CartButton onClick={onCartClick}>
                            {cartItems.length} produto(s) no carrinho
                            <CartIcon src="/imagens/carrinho.png" alt="Carrinho" />
                        </CartButton>
                    </NavContent>
                </NavContainer>

                <HeroImage style={{ backgroundImage: `url(${restaurant.capa})` }}>
                    <CategoryText>{restaurant.tipo}</CategoryText>
                    <RestaurantTitle>{restaurant.titulo}</RestaurantTitle>
                </HeroImage>
            </HeaderContainer>

            <FoodListContainer>
                <FoodGrid>
                    {restaurant.cardapio.map((item) => (
                        <FoodCard
                            key={item.id}
                            image={item.foto}
                            name={item.nome}
                            description={item.descricao}
                            price={item.preco}
                            serves={item.porcao}
                            onAddToCart={() => handleAddToCart(item)}
                            onImageClick={() => handleImageClick(item)}
                        />
                    ))}
                </FoodGrid>
            </FoodListContainer>

            {selectedItem && (
                <FoodModal
                    image={selectedItem.foto}
                    name={selectedItem.nome}
                    description={selectedItem.descricao}
                    price={selectedItem.preco}
                    serves={selectedItem.porcao}
                    onClose={handleCloseModal}
                    onAddToCart={() => {
                        handleAddToCart(selectedItem);
                        handleCloseModal();
                    }}
                />
            )}

            <Footer />
        </>
    );
};

export default RestaurantDetails;