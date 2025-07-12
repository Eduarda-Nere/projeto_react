import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import RestaurantCard from '../components/RestaurantCard';
import Footer from '../components/Footer';
import { RestaurantList } from '../App.styles';
import { getRestaurants } from '../services/api';

interface Restaurant {
    id: number;
    titulo: string;
    destacado: boolean;
    tipo: string;
    avaliacao: number;
    descricao: string;
    capa: string;
}

const Home = () => {
    const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

    useEffect(() => {
        const fetchRestaurants = async () => {
            const data = await getRestaurants();
            setRestaurants(data);
        };
        fetchRestaurants();
    }, []);

    return (
        <>
            <Header />
            <RestaurantList>
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
            </RestaurantList>
            <Footer />
        </>
    );
};

export default Home;