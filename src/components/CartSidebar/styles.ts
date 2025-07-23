import styled from 'styled-components';

interface SidebarContainerProps {
    $isOpen: boolean;
}

export const SidebarContainer = styled.div<SidebarContainerProps>`
    position: fixed;
    top: 0;
    right: 0;
    width: 350px;
    height: 100vh;
    background-color: #e86464;
    padding: 85px 20px 20px 20px;
    display: flex;
    flex-direction: column;
    z-index: 1001;
    overflow-y: auto;
    box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    transform: translateX(${props => props.$isOpen ? '0' : '100%'});

    @media (max-width: 576px) {
        width: 100%;
        padding: 75px 15px 15px 15px;
    }
`;

export const CloseSidebarButton = styled.button`
    position: absolute;
    top: 16px;
    right: 16px;
    background: rgba(255, 255, 255, 0.2);
    border: none;
    color: white;
    font-size: 24px;
    font-weight: bold;
    cursor: pointer;
    z-index: 10;
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: all 0.3s ease;

    &:hover {
        background: rgba(255, 255, 255, 0.3);
    }
`;

export const CartItem = styled.div`
    background-color: #fcecdc;
    padding: 15px;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    gap: 12px;
    position: relative;
    min-height: 85px;
`;

export const ItemImage = styled.img`
    width: 55px;
    height: 55px;
    object-fit: cover;
`;

export const ItemInfo = styled.div`
    flex: 1;
`;

export const ItemName = styled.span`
    color: #e86464;
    font-weight: bold;
    display: block;
    margin-bottom: 4px;
`;

export const ItemPrice = styled.span`
    color: #e86464;
    font-size: 14px;
`;

export const DeleteButton = styled.button`
    position: absolute;  
    bottom: 8px;       
    right: 8px;      
    background: none;
    border: none;
    color: #e86464;
    cursor: pointer;
    font-size: 18px;
    padding: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    border-radius: 4px;
    transition: all 0.2s ease;

    &:hover {
        background: rgba(255, 255, 255, 0.3);
    }
`;

export const TotalText = styled.p`
    color: white;
    font-size: 15px;
    font-weight: bold;
    margin: 20px 0 10px 0;
    text-align: center;
    padding: 10px;
    background: rgba(0, 0, 0, 0.1);
`;

export const CheckoutButton = styled.button`
    background-color: #fcecdc;
    color: #e86464;
    border: none;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-bottom: 0;
    height: 40px;
    width: 100%;
    padding: 0 15px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background-color: #fff8e6;
        transform: translateY(-2px);
    }

    &:active {
        transform: translateY(0);
    }

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;

export const ItemQuantity = styled.span`
    color: #e86464;
    font-size: 14px;
    margin-left: 8px;
    background-color: rgba(255, 255, 255, 0.3);
    padding: 2px 6px;
    border-radius: 10px;
`;

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

export const FormTitle = styled.h2`
    color: white;
    font-size: 18px;
    margin-bottom: 15px;
    text-align: center;
`;

export const FormInput = styled.input`
    background-color: #fcfaf3;
    color: #e86464;
    border: none;
    padding: 12px 15px;
    font-size: 14px;
    width: 100%;
    box-sizing: border-box;

    &::placeholder {
        color: #e86464;
        opacity: 0.7;
    }

    &.error {
        outline: 2px solid #ffebee;
        background-color: #fff5f5;
    }
`;

export const FormGroup = styled.div`
    display: flex;
    gap: 10px;

    & > ${FormInput} {
        flex: 1;
        min-width: 0;
    }

    &.small-inputs {
        & > ${FormInput} {
            flex: 0 1 300px;
            max-width: 170px;
        }
    }
`;

export const FormActions = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 20px;
`;

export const BackButton = styled.button`
    background-color: transparent;
    color: white;
    border: 1px solid white;
    padding: 10px;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        background-color: rgba(255, 255, 255, 0.1);
    }
`;

export const SuccessMessage = styled.div`
    color: white;
    text-align: center;
    margin-bottom: 30px;

    h3 {
        font-size: 20px;
        margin-bottom: 15px;
    }

    p {
        margin-bottom: 10px;
        line-height: 1.5;
    }
`;

export const ErrorMessage = styled.div`
    color: #ffebee;
    font-size: 12px;
    margin-top: 4px;
    background-color: rgba(255, 0, 0, 0.2);
    padding: 4px 8px;
    border-radius: 4px;
`;

export const EmptyCartMessage = styled.div`
    color: white;
    text-align: center;
    padding: 40px 20px;
    font-size: 18px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    svg {
        font-size: 50px;
        opacity: 0.7;
    }
`;

export const EmptyCartIcon = styled.div`
    font-size: 60px;
    margin-bottom: 20px;
    opacity: 0.5;
`;
