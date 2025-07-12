export const getRestaurants = async () => {
    const response = await fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes');
    return await response.json();
};

export const getRestaurantById = async (id: string) => {
    const response = await fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`);
    return await response.json();
};

export interface MenuItem {
    id: number;
    nome: string;
    descricao: string;
    preco: number;
    porcao: string;
    foto: string;
}