import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../services/store';
import { removeItem, clearCart } from '../../services/cartSlice';
import {
    SidebarContainer,
    CloseSidebarButton,
    CartItem,
    ItemImage,
    ItemInfo,
    ItemName,
    ItemPrice,
    DeleteButton,
    TotalText,
    CheckoutButton,
    ItemQuantity,
    FormContainer,
    FormTitle,
    FormInput,
    FormGroup,
    FormActions,
    BackButton,
    SuccessMessage
} from './styles';

type CheckoutStep = 'cart' | 'delivery' | 'payment' | 'success';

interface CartSidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, onClose }) => {
    const [step, setStep] = useState<CheckoutStep>('cart');
    const [deliveryData, setDeliveryData] = useState({
        deliverer: '',
        address: '',
        city: '',
        cep: '',
        number: '',
        complement: ''
    });
    const [paymentData, setPaymentData] = useState({
        cardName: '',
        cardNumber: '',
        cvv: '',
        expiryMonth: '',
        expiryYear: ''
    });

    const items = useSelector((state: RootState) => state.cart.items);
    const dispatch = useDispatch();

    const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    const handleDeliverySubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStep('payment');
    };

    const handlePaymentSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStep('success');
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (step === 'delivery') {
            setDeliveryData(prev => ({ ...prev, [name]: value }));
        } else {
            setPaymentData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleRemoveItem = (id: number) => {
        dispatch(removeItem(id));
    };

    return (
        <SidebarContainer $isOpen={isOpen}>
            <CloseSidebarButton onClick={onClose} aria-label="Fechar carrinho">
                ×
            </CloseSidebarButton>

            {step === 'cart' && (
                <>
                    {items.map(item => (
                        <CartItem key={item.id}>
                            <ItemImage src={item.image} alt={item.name} />
                            <ItemInfo>
                                <ItemName>{item.name}</ItemName>
                                <ItemPrice>
                                    R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}
                                    {item.quantity > 1 && <ItemQuantity>×{item.quantity}</ItemQuantity>}
                                </ItemPrice>
                            </ItemInfo>
                            <DeleteButton onClick={() => handleRemoveItem(item.id)} aria-label="Remover item">
                                &#128465;
                            </DeleteButton>
                        </CartItem>
                    ))}

                    <TotalText>Valor total: R$ {total.toFixed(2).replace('.', ',')}</TotalText>
                    <CheckoutButton onClick={() => setStep('delivery')}>
                        Continuar com a entrega
                    </CheckoutButton>
                </>
            )}

            {step === 'delivery' && (
                <FormContainer onSubmit={handleDeliverySubmit}>
                    <FormTitle>Entrega</FormTitle>

                    <FormInput
                        name="deliverer"
                        placeholder="Quem irá entregar"
                        value={deliveryData.deliverer}
                        onChange={handleInputChange}
                        required
                    />
                    <FormInput
                        name="address"
                        placeholder="Endereço"
                        value={deliveryData.address}
                        onChange={handleInputChange}
                        required
                    />
                    <FormInput
                        name="city"
                        placeholder="Cidade"
                        value={deliveryData.city}
                        onChange={handleInputChange}
                        required
                    />
                    <FormGroup className="small-inputs">
                        <FormInput
                            name="cep"
                            placeholder="CEP"
                            value={deliveryData.cep}
                            onChange={handleInputChange}
                            required
                        />
                        <FormInput
                            name="number"
                            placeholder="Número"
                            value={deliveryData.number}
                            onChange={handleInputChange}
                            required
                        />
                    </FormGroup>
                    <FormInput
                        name="complement"
                        placeholder="Complemento (opcional)"
                        value={deliveryData.complement}
                        onChange={handleInputChange}
                    />

                    <FormActions>
                        <CheckoutButton type="submit">Continuar com o pagamento</CheckoutButton>
                        <BackButton type="button" onClick={() => setStep('cart')}>
                            Voltar para o carrinho
                        </BackButton>
                    </FormActions>
                </FormContainer>
            )}

            {step === 'payment' && (
                <FormContainer onSubmit={handlePaymentSubmit}>
                    <FormTitle>Pagamento - Valor a pagar R$ {total.toFixed(2).replace('.', ',')}</FormTitle>

                    <FormInput
                        name="cardName"
                        placeholder="Nome no cartão"
                        value={paymentData.cardName}
                        onChange={handleInputChange}
                        required
                    />
                    <FormGroup className="small-inputs">
                        <FormInput
                            name="cardNumber"
                            placeholder="Número do cartão"
                            value={paymentData.cardNumber}
                            onChange={handleInputChange}
                            required
                        />
                        <FormInput
                            name="cvv"
                            placeholder="CVV"
                            value={paymentData.cvv}
                            onChange={handleInputChange}
                            required
                        />
                    </FormGroup>
                    <FormGroup className="small-inputs">
                        <FormInput
                            name="expiryMonth"
                            placeholder="Mês"
                            value={paymentData.expiryMonth}
                            onChange={handleInputChange}
                            required
                        />
                        <FormInput
                            name="expiryYear"
                            placeholder="Ano"
                            value={paymentData.expiryYear}
                            onChange={handleInputChange}
                            required
                        />
                    </FormGroup>

                    <FormActions>
                        <CheckoutButton type="submit">Finalizar pagamento</CheckoutButton>
                        <BackButton type="button" onClick={() => setStep('delivery')}>
                            Voltar para a edição de endereço
                        </BackButton>
                    </FormActions>
                </FormContainer>
            )}

            {step === 'success' && (
                <div>
                    <SuccessMessage>
                        <h3>Pedido realizado com sucesso!</h3>
                        <p>A equipe do restaurante agradece sua preferência!</p>
                        <p>Seu pedido chegará em aproximadamente 40 minutos.</p>
                    </SuccessMessage>
                    <CheckoutButton onClick={() => {
                        dispatch(clearCart());
                        onClose();
                    }}>
                        Concluir
                    </CheckoutButton>
                </div>
            )}
        </SidebarContainer>
    );
};

export default CartSidebar;