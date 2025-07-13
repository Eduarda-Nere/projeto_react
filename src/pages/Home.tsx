import React, { useEffect, useState } from 'react';
import * as S from '../App.styles';
import Header from '../components/Header';
import RestaurantCard from '../components/RestaurantCard';
import Footer from '../components/Footer';
import { getRestaurants } from '../services/api';
import LoadingPage from '../components/LoadingPage';

const Home = () => {
    const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchRestaurants = async () => {
            try {
                setIsLoading(true);
                const data = await getRestaurants();
                setRestaurants(data);
            } catch (error) {
                console.error('Erro ao buscar restaurantes:', error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchRestaurants();
    }, []);

    if (isLoading) {
        return <LoadingPage />;
    }

    return (
        <>
            <Header />
            <S.RestaurantList>
                {restaurants.map(restaurant => (
                    <RestaurantCard
                        key={restaurant.id}
                        id={restaurant.id}
                        image={restaurant.capa}
                        foodType={restaurant.tipo}
                        title={restaurant.titulo}
                        rating={restaurant.avaliacao}
                        description={restaurant.descricao}
                    />
                ))}
            </S.RestaurantList>
            <Footer />
        </>
    );
};

export default Home;