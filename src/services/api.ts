export const getRestaurants = async (): Promise<Restaurant[]> => {
    const response = await fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes');
    return await response.json();
};

export const getRestaurantById = async (id: string): Promise<RestaurantDetails> => {
    const response = await fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`);
    return await response.json();
};