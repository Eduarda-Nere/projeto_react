import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getRestaurantById } from '../services/api';
import * as HeaderStyles from '../components/RestaurantHeader/styles';
import * as FoodCardStyles from '../components/FoodCard/styles';
import FoodCard from '../components/FoodCard';
import Footer from '../components/Footer';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../services/cartSlice';
import FoodModal from '../components/FoodModal';
import LoadingPage from '../components/LoadingPage';
import styled from 'styled-components';
import { RootState } from '../services/store';

const FoodListContainer = styled.div`
    background-color: #fcfaf3;
    padding: 40px 0 210px;
`;

interface MenuItem {
    id: number;
    nome: string;
    descricao: string;
    preco: number;
    porcao: string;
    foto: string;
}

interface Restaurant {
    id: number;
    titulo: string;
    tipo: string;
    capa: string;
    cardapio: MenuItem[];
}

const RestaurantDetails: React.FC<{
    onCartClick: () => void;
    onModalOpen: () => void
}> = ({ onCartClick, onModalOpen }) => {
    const { id } = useParams<{ id: string }>();
    const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
    const [loading, setLoading] = useState(true);
    const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchRestaurant = async () => {
            try {
                const data = await getRestaurantById(id!);
                setRestaurant(data);
            } catch (error) {
                console.error('Erro ao encontrar restaurante:', error);
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

    const openModal = (item: MenuItem) => {
        setSelectedItem(item);
        setIsModalOpen(true);
        onModalOpen();
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedItem(null);
    };

    if (loading) return <LoadingPage />;
    if (!restaurant) return <div>Restaurante não encontrado</div>;

    return (
        <>
            <HeaderStyles.HeaderContainer>
                <HeaderStyles.NavContainer>
                    <HeaderStyles.NavContent>
                        <HeaderStyles.NavLink href="/">Restaurantes</HeaderStyles.NavLink>
                        <HeaderStyles.Logo src="/imagens/logo.png" alt="Logo" />
                        <HeaderStyles.CartButton onClick={onCartClick}>
                            {cartItems.length} produto(s) no carrinho
                            <HeaderStyles.CartIcon src="/imagens/carrinho.png" alt="Carrinho" />
                        </HeaderStyles.CartButton>
                    </HeaderStyles.NavContent>
                </HeaderStyles.NavContainer>

                <HeaderStyles.HeroImage style={{ backgroundImage: `url(${restaurant.capa})` }}>
                    <HeaderStyles.CategoryText>{restaurant.tipo}</HeaderStyles.CategoryText>
                    <HeaderStyles.RestaurantTitle>{restaurant.titulo}</HeaderStyles.RestaurantTitle>
                </HeaderStyles.HeroImage>
            </HeaderStyles.HeaderContainer>

            <FoodListContainer>
                <FoodCardStyles.Container>
                    {restaurant.cardapio.map((item) => (
                        <FoodCard
                            key={item.id}
                            image={item.foto}
                            name={item.nome}
                            description={item.descricao}
                            onOpenModal={() => openModal(item)}
                            onImageClick={() => openModal(item)}
                        />
                    ))}
                </FoodCardStyles.Container>
            </FoodListContainer>

            {isModalOpen && selectedItem && (
                <FoodModal
                    image={selectedItem.foto}
                    name={selectedItem.nome}
                    description={selectedItem.descricao}
                    price={selectedItem.preco}
                    serves={selectedItem.porcao}
                    onClose={closeModal}
                    onAddToCart={() => {
                        handleAddToCart(selectedItem);
                        closeModal();
                    }}
                />
            )}

            <Footer />
        </>
    );
};

export default RestaurantDetails;
