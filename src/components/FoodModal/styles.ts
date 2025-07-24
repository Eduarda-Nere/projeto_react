import styled from "styled-components";

export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    padding: 20px;
`;

export const ModalContainer = styled.div`
    background-color: #e86464;
    display: flex;
    max-width: 800px; 
    width: 85%; 
    max-height: 90vh;
    overflow: visible;
    position: relative;
    margin-top: 50px;

    @media (min-width: 769px) {
        flex-direction: row;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        width: 95%;
        max-height: 95vh;
        margin-top: 45px;
    }

    @media (max-width: 480px) {
        width: 100%;
        max-height: 100vh;
        margin-top: 40px;
    }
`;

export const ModalImage = styled.div<{ src: string }>`
    background-image: url(${({ src }) => src});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    
    @media (min-width: 769px) {
        width: calc(50% - 18px);
        height: auto;
        margin: 9px;
    }

    @media (max-width: 768px) {
        width: calc(100% - 18px); 
        height: 150px;
        margin: 9px 9px 0 9px;
    }
`;

export const ModalContent = styled.div`
    padding: 20px;
    color: white;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    
    @media (min-width: 769px) {
        width: calc(50% - 18px); 
    }

    @media (max-width: 768px) {
        width: calc(100% - 18px);
        padding: 9px;
        margin: 0 9px 9px 9px;
    }
`;

export const ModalTitle = styled.h2`
    font-size: 22px;
    margin-bottom: 12px;
    font-weight: 700;

    @media (max-width: 768px) {
        font-size: 18px;
    }
`;

export const ModalDescription = styled.p`
    font-size: 14px;
    line-height: 1.4;
    margin-bottom: 16px;

    @media (max-width: 768px) {
        font-size: 12px;
        line-height: 1.3;
    }
`;

export const ServesInfo = styled.p`
    font-size: 14px;
    margin-bottom: 16px;

    @media (max-width: 768px) {
        font-size: 12px;
    }
`;

export const AddToCartButton = styled.button`
    background-color: #FFEBD9;
    color: #e86464;
    border: none;
    padding: 8px;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    width: 100%;
    margin-top: auto;
    height: 34px;

    @media (max-width: 768px) {
        font-size: 12px;
        padding: 6px;
    }
`;

export const CloseButton = styled.button`
    position: absolute;
    top: -45px;
    right: -2px;
    background: rgba(255, 255, 255, 0.2);
    color: white;
    font-size: 24px;
    font-weight: bold;
    cursor: pointer;
    z-index: 1001;
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
