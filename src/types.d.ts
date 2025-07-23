interface FoodModalProps {
    image: string;
    name: string;
    description: string;
    price: number;
    serves: string;
    onClose: () => void;
    onAddToCart: () => void;
}

interface RestaurantCardProps {
    id: number;
    image: string;
    foodType: string;
    title: string;
    rating: number;
    description: string;
}

interface FoodCardProps {
    image: string;
    name: string;
    description: string;
    onOpenModal: () => void;
    onImageClick: () => void;
}

interface CartSidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

type CheckoutStep = 'cart' | 'delivery' | 'payment' | 'success';

interface MaskedFieldProps {
    mask: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
    placeholder?: string;
    className?: string;
}

interface RestaurantHeaderProps {
    title: string;
    category: string;
    coverImage: string;
}

interface OverlayProps {
    $isOpen: boolean;
}

interface Restaurant {
    id: number;
    titulo: string;
    destacado: boolean;
    tipo: string;
    avaliacao: number;
    descricao: string;
    capa: string;
}

interface MenuItem {
    id: number;
    nome: string;
    descricao: string;
    preco: number;
    porcao: string;
    foto: string;
}

interface RestaurantDetails {
    id: number;
    titulo: string;
    tipo: string;
    capa: string;
    cardapio: MenuItem[];
}

interface CartItem {
    id: number;
    name: string;
    price: number;
    image: string;
    quantity: number;
}

interface CartState {
    items: CartItem[];
}

interface RestaurantDetailsProps {
    onCartClick: () => void;
    onModalOpen: () => void;
}
