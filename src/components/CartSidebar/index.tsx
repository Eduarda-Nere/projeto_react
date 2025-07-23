import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../services/store';
import { removeItem, clearCart } from '../../services/cartSlice';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import MaskedField from '../Checkout/MaskedField';
import * as S from './styles';

const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, onClose }) => {
    const [step, setStep] = useState<CheckoutStep>('cart');
    const [orderId, setOrderId] = useState<string | null>(null);
    const items = useSelector((state: RootState) => state.cart.items);
    const dispatch = useDispatch();

    const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    const deliveryForm = useFormik({
        initialValues: {
            deliverer: '',
            address: '',
            city: '',
            cep: '',
            number: '',
            complement: ''
        },
        validationSchema: Yup.object().shape({
            deliverer: Yup.string()
                .min(5, 'Mínimo de 5 caracteres')
                .required('Campo obrigatório'),
            address: Yup.string()
                .min(5, 'Mínimo de 5 caracteres')
                .required('Campo obrigatório'),
            city: Yup.string()
                .min(3, 'Mínimo de 3 caracteres')
                .required('Campo obrigatório'),
            cep: Yup.string()
                .matches(/^\d{5}-\d{3}$/, 'CEP inválido')
                .required('Campo obrigatório'),
            number: Yup.string()
                .matches(/^\d{1,8}$/, 'Máximo 8 dígitos')
                .required('Campo obrigatório'),
            complement: Yup.string()
        }),
        onSubmit: () => {
            setStep('payment');
        }
    });

    const paymentForm = useFormik({
        initialValues: {
            cardName: '',
            cardNumber: '',
            cvv: '',
            expiryMonth: '',
            expiryYear: ''
        },
        validationSchema: Yup.object().shape({
            cardName: Yup.string()
                .min(5, 'Mínimo de 5 caracteres')
                .required('Campo obrigatório'),
            cardNumber: Yup.string()
                .matches(/^\d{4} \d{4} \d{4} \d{4}$/, 'Número inválido')
                .required('Campo obrigatório'),
            cvv: Yup.string()
                .matches(/^\d{3,4}$/, 'CVV inválido')
                .required('Campo obrigatório'),
            expiryMonth: Yup.string()
                .matches(/^(0[1-9]|1[0-2])$/, 'Mês inválido (01-12)')
                .required('Campo obrigatório'),
            expiryYear: Yup.string()
                .matches(/^\d{4}$/, 'Ano deve ter 4 dígitos')
                .required('Ano é obrigatório'),
        }),
        onSubmit: () => {
            const newOrderId = `${Math.floor(100000 + Math.random() * 900000)}`;
            setOrderId(newOrderId);
            setStep('success');
        }
    });

    const handleRemoveItem = (id: number) => {
        dispatch(removeItem(id));
    };

    const checkInputHasError = (fieldName: string, formik: any) => {
        const isTouched = fieldName in formik.touched;
        const isInvalid = fieldName in formik.errors;
        return isTouched && isInvalid;
    };

    const resetAll = () => {
        dispatch(clearCart());
        deliveryForm.resetForm();
        paymentForm.resetForm();
        setOrderId(null);
        setStep('cart');
        onClose();
    };

    return (
        <S.SidebarContainer $isOpen={isOpen}>
            <S.CloseSidebarButton $isOpen={isOpen} onClick={onClose}>×</S.CloseSidebarButton>

            {step === 'cart' && (
                <>
                    {items.length === 0 ? (
                        <S.EmptyCartMessage>
                            <S.EmptyCartIcon>🛒</S.EmptyCartIcon>
                            <div>Seu carrinho está vazio</div>
                            <div style={{ fontSize: '14px', opacity: 0.8 }}>Adicione itens para continuar</div>
                            <S.BackButton
                                onClick={onClose}
                                style={{ marginTop: '20px' }}
                            >
                                Voltar as compras
                            </S.BackButton>
                        </S.EmptyCartMessage>
                    ) : (
                        <>
                            {items.map(item => (
                                <S.CartItem key={item.id}>
                                    <S.ItemImage src={item.image} alt={item.name} />
                                    <S.ItemInfo>
                                        <S.ItemName>{item.name}</S.ItemName>
                                        <S.ItemPrice>
                                            R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}
                                            {item.quantity > 1 && <S.ItemQuantity>×{item.quantity}</S.ItemQuantity>}
                                        </S.ItemPrice>
                                    </S.ItemInfo>
                                    <S.DeleteButton onClick={() => handleRemoveItem(item.id)} aria-label="Remover item">
                                        &#128465;
                                    </S.DeleteButton>
                                </S.CartItem>
                            ))}

                            <S.TotalText>
                                <S.TotalLabel>Valor total</S.TotalLabel>
                                <S.TotalValue>R$ {total.toFixed(2).replace('.', ',')}</S.TotalValue>
                            </S.TotalText>
                            <S.CheckoutButton
                                onClick={() => setStep('delivery')}
                                disabled={items.length === 0}
                            >
                                Continuar com a entrega
                            </S.CheckoutButton>
                        </>
                    )}
                </>
            )}

            {step === 'delivery' && (
                <S.FormContainer onSubmit={deliveryForm.handleSubmit}>
                    <S.FormTitle>Entrega</S.FormTitle>

                    <S.FormField>
                        <S.FormLabel>Quem irá receber</S.FormLabel>
                        <S.FormInputContainer>
                            <S.FormInput
                                name="deliverer"
                                value={deliveryForm.values.deliverer}
                                onChange={deliveryForm.handleChange}
                                onBlur={deliveryForm.handleBlur}
                                className={checkInputHasError('deliverer', deliveryForm) ? 'error' : ''}
                            />
                            {checkInputHasError('deliverer', deliveryForm) && (
                                <S.ErrorMessage>{deliveryForm.errors.deliverer}</S.ErrorMessage>
                            )}
                        </S.FormInputContainer>
                    </S.FormField>

                    <S.FormField>
                        <S.FormLabel>Endereço</S.FormLabel>
                        <S.FormInputContainer>
                            <S.FormInput
                                name="address"
                                value={deliveryForm.values.address}
                                onChange={deliveryForm.handleChange}
                                onBlur={deliveryForm.handleBlur}
                                className={checkInputHasError('address', deliveryForm) ? 'error' : ''}
                            />
                            {checkInputHasError('address', deliveryForm) && (
                                <S.ErrorMessage>{deliveryForm.errors.address}</S.ErrorMessage>
                            )}
                        </S.FormInputContainer>
                    </S.FormField>

                    <S.FormField>
                        <S.FormLabel>Cidade</S.FormLabel>
                        <S.FormInputContainer>
                            <S.FormInput
                                name="city"
                                value={deliveryForm.values.city}
                                onChange={deliveryForm.handleChange}
                                onBlur={deliveryForm.handleBlur}
                                className={checkInputHasError('city', deliveryForm) ? 'error' : ''}
                            />
                            {checkInputHasError('city', deliveryForm) && (
                                <S.ErrorMessage>{deliveryForm.errors.city}</S.ErrorMessage>
                            )}
                        </S.FormInputContainer>
                    </S.FormField>

                    <S.FormGroup>
                        <S.FormField>
                            <S.FormLabel>CEP</S.FormLabel>
                            <S.FormInputContainer>
                                <MaskedField
                                    mask="99999-999"
                                    name="cep"
                                    value={deliveryForm.values.cep}
                                    onChange={deliveryForm.handleChange}
                                    onBlur={deliveryForm.handleBlur}
                                    className={checkInputHasError('cep', deliveryForm) ? 'error' : ''}
                                />
                                {checkInputHasError('cep', deliveryForm) && (
                                    <S.ErrorMessage>{deliveryForm.errors.cep}</S.ErrorMessage>
                                )}
                            </S.FormInputContainer>
                        </S.FormField>

                        <S.FormField>
                            <S.FormLabel>Número</S.FormLabel>
                            <S.FormInputContainer>
                                <MaskedField
                                    mask="99999999"
                                    name="number"
                                    value={deliveryForm.values.number}
                                    onChange={(e) => {
                                        const value = e.target.value.replace(/\D/g, '').slice(0, 8);
                                        deliveryForm.setFieldValue('number', value);
                                    }}
                                    onBlur={deliveryForm.handleBlur}
                                    className={checkInputHasError('number', deliveryForm) ? 'error' : ''}
                                />
                                {checkInputHasError('number', deliveryForm) && (
                                    <S.ErrorMessage>{deliveryForm.errors.number}</S.ErrorMessage>
                                )}
                            </S.FormInputContainer>
                        </S.FormField>
                    </S.FormGroup>

                    <S.FormField>
                        <S.FormLabel>Complemento (opcional)</S.FormLabel>
                        <S.FormInputContainer>
                            <S.FormInput
                                name="complement"
                                value={deliveryForm.values.complement}
                                onChange={deliveryForm.handleChange}
                                onBlur={deliveryForm.handleBlur}
                            />
                        </S.FormInputContainer>
                    </S.FormField>

                    <S.FormActions>
                        <S.CheckoutButton type="submit">Continuar com o pagamento</S.CheckoutButton>
                        <S.BackButton type="button" onClick={() => setStep('cart')}>
                            Voltar para o carrinho
                        </S.BackButton>
                    </S.FormActions>
                </S.FormContainer>
            )}

            {step === 'payment' && (
                <S.FormContainer onSubmit={paymentForm.handleSubmit}>
                    <S.FormTitle>Pagamento - Valor a pagar R$ {total.toFixed(2).replace('.', ',')}</S.FormTitle>

                    <S.FormField>
                        <S.FormLabel>Nome no cartão</S.FormLabel>
                        <S.FormInputContainer>
                            <S.FormInput
                                name="cardName"
                                value={paymentForm.values.cardName}
                                onChange={paymentForm.handleChange}
                                onBlur={paymentForm.handleBlur}
                                className={checkInputHasError('cardName', paymentForm) ? 'error' : ''}
                            />
                            {checkInputHasError('cardName', paymentForm) && (
                                <S.ErrorMessage>{paymentForm.errors.cardName}</S.ErrorMessage>
                            )}
                        </S.FormInputContainer>
                    </S.FormField>

                    <S.FormGroup>
                        <S.FormField style={{ flex: 1 }}>
                            <S.FormLabel>Número do cartão</S.FormLabel>
                            <S.FormInputContainer>
                                <MaskedField
                                    mask="9999 9999 9999 9999"
                                    name="cardNumber"
                                    value={paymentForm.values.cardNumber}
                                    onChange={paymentForm.handleChange}
                                    onBlur={paymentForm.handleBlur}
                                    className={checkInputHasError('cardNumber', paymentForm) ? 'error' : ''}
                                />
                                {checkInputHasError('cardNumber', paymentForm) && (
                                    <S.ErrorMessage>{paymentForm.errors.cardNumber}</S.ErrorMessage>
                                )}
                            </S.FormInputContainer>
                        </S.FormField>

                        <S.FormField style={{ flex: 1 }}>
                            <S.FormLabel>CVV</S.FormLabel>
                            <S.FormInputContainer>
                                <MaskedField
                                    mask="9999"
                                    name="cvv"
                                    value={paymentForm.values.cvv}
                                    onChange={paymentForm.handleChange}
                                    onBlur={paymentForm.handleBlur}
                                    className={checkInputHasError('cvv', paymentForm) ? 'error' : ''}
                                />
                                {checkInputHasError('cvv', paymentForm) && (
                                    <S.ErrorMessage>{paymentForm.errors.cvv}</S.ErrorMessage>
                                )}
                            </S.FormInputContainer>
                        </S.FormField>
                    </S.FormGroup>

                    <S.FormGroup>
                        <S.FormField>
                            <S.FormLabel>Mês de vencimento</S.FormLabel>
                            <S.FormInputContainer>
                                <MaskedField
                                    mask="99"
                                    name="expiryMonth"
                                    value={paymentForm.values.expiryMonth}
                                    onChange={(e) => {
                                        const value = e.target.value.replace(/\D/g, '').slice(0, 2);
                                        paymentForm.setFieldValue('expiryMonth', value);
                                    }}
                                    onBlur={(e) => {
                                        const month = parseInt(paymentForm.values.expiryMonth || '0');
                                        if (month < 1) paymentForm.setFieldValue('expiryMonth', '01');
                                        if (month > 12) paymentForm.setFieldValue('expiryMonth', '12');
                                        paymentForm.handleBlur(e);
                                    }}
                                    className={checkInputHasError('expiryMonth', paymentForm) ? 'error' : ''}
                                />
                                {checkInputHasError('expiryMonth', paymentForm) && (
                                    <S.ErrorMessage>{paymentForm.errors.expiryMonth}</S.ErrorMessage>
                                )}
                            </S.FormInputContainer>
                        </S.FormField>

                        <S.FormField>
                            <S.FormLabel>Ano de vencimento</S.FormLabel>
                            <S.FormInputContainer>
                                <MaskedField
                                    mask="9999"
                                    name="expiryYear"
                                    value={paymentForm.values.expiryYear}
                                    onChange={(e) => {
                                        const value = e.target.value.replace(/\D/g, '').slice(0, 4);
                                        paymentForm.setFieldValue('expiryYear', value);
                                    }}
                                    onBlur={(e) => {
                                        const currentYear = new Date().getFullYear();
                                        const enteredYear = parseInt(paymentForm.values.expiryYear || '0');

                                        if (enteredYear < currentYear) {
                                            paymentForm.setFieldValue('expiryYear', currentYear.toString());
                                        }

                                        paymentForm.handleBlur(e);
                                    }}
                                    className={checkInputHasError('expiryYear', paymentForm) ? 'error' : ''}
                                />
                                {checkInputHasError('expiryYear', paymentForm) && (
                                    <S.ErrorMessage>{paymentForm.errors.expiryYear}</S.ErrorMessage>
                                )}
                            </S.FormInputContainer>
                        </S.FormField>
                    </S.FormGroup>

                    <S.FormActions>
                        <S.CheckoutButton type="submit">Finalizar pagamento</S.CheckoutButton>
                        <S.BackButton type="button" onClick={() => setStep('delivery')}>
                            Voltar para a edição de endereço
                        </S.BackButton>
                    </S.FormActions>
                </S.FormContainer>
            )}

            {step === 'success' && (
                <div>
                    <S.SuccessMessage>
                        <h3>Pedido realizado - {orderId}</h3>
                        <p> Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido. </p>
                        <p> Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras.</p>
                        <p> Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição.</p>
                        <p> Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!</p>
                    </S.SuccessMessage>

                    <S.CheckoutButton onClick={resetAll}>
                        Concluir
                    </S.CheckoutButton>
                </div>
            )}
        </S.SidebarContainer>
    );
};

export default CartSidebar;
