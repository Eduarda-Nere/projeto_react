import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getRestaurantById } from '../services/api';
import * as S from '../components/RestaurantHeader/styles';
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
    padding: 40px 200px 210px;

    @media (max-width: 1200px) {
        padding: 40px 100px 210px;
    }

    @media (max-width: 992px) {
        padding: 40px 60px 210px;
    }

    @media (max-width: 768px) {
        padding: 40px 30px 210px;
    }

    @media (max-width: 576px) {
        padding: 30px 15px 180px;
    }
`;

const FoodGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
    margin-top: 40px;

    @media (max-width: 1200px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 24px;
    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 20px;
        margin-top: 30px;
    }
`;

const RestaurantDetails: React.FC<RestaurantDetailsProps> = ({ onCartClick, onModalOpen }) => {
    const { id } = useParams<{ id: string }>();
    const [restaurant, setRestaurant] = useState<RestaurantDetails | null>(null);
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

    const handleImageClick = (item: MenuItem) => {
        onModalOpen(); 
        setSelectedItem(item); 
    };

    if (loading) return <LoadingPage />;
    if (!restaurant) return <div>Restaurante não encontrado</div>;

    return (
        <>
            <S.HeaderContainer>
                <S.NavContainer>
                    <S.NavContent>
                        <S.NavLink href="/">Restaurantes</S.NavLink>
                        <S.Logo src="/imagens/logo.png" alt="Logo" />
                        <S.CartButton onClick={onCartClick}>
                            {cartItems.length} produto(s) no carrinho
                            <S.CartIcon src="/imagens/carrinho.png" alt="Carrinho" />
                        </S.CartButton>
                    </S.NavContent>
                </S.NavContainer>

                <S.HeroImage style={{ backgroundImage: `url(${restaurant.capa})` }}>
                    <S.CategoryText>{restaurant.tipo}</S.CategoryText>
                    <S.RestaurantTitle>{restaurant.titulo}</S.RestaurantTitle>
                </S.HeroImage>
            </S.HeaderContainer>

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
                    onClose={() => setSelectedItem(null)}
                    onAddToCart={() => {
                        handleAddToCart(selectedItem);
                        setSelectedItem(null);
                    }}
                />
            )}

            <Footer />
        </>
    );
};

export default RestaurantDetails;