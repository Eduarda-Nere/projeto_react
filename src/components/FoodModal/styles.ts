import styled from 'styled-components';

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
    overflow-y: auto;
`;

export const ModalContainer = styled.div`
    background-color: #e86464;
    display: flex;
    max-width: 1000px;
    width: 90%;
    max-height: 90vh;
    overflow: hidden;
    position: relative;
    border-radius: 8px;

    @media (min-width: 769px) {
        flex-direction: row;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        height: auto;
    }
`;

export const ModalImage = styled.div<{ src: string }>`
    background-image: url(${({ src }) => src});
    background-size: cover;
    background-position: center;
    min-height: 300px;
    
    @media (min-width: 769px) {
        width: calc(50% - 18px); 
        height: auto;
        margin: 9px;
    }

    @media (max-width: 768px) {
        width: calc(100% - 18px); 
        height: 250px;
        margin: 9px 9px 0 9px;
    }
`;

export const ModalContent = styled.div`
    padding: 32px;
    color: white;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    
    @media (min-width: 769px) {
        width: calc(50% - 18px);
        max-height: 90vh;
    }

    @media (max-width: 768px) {
        width: calc(100% - 18px); 
        padding: 24px;
        margin: 0 9px 9px 9px; 
    }
`;

export const ModalTitle = styled.h2`
    font-size: 28px;
    margin-bottom: 16px;
    font-weight: 700;
`;

export const ModalDescription = styled.p`
    font-size: 15px;
    line-height: 1.5;
    margin-bottom: 20px;
    flex-grow: 1;
`;

export const ServesInfo = styled.p`
    font-size: 16px;
    margin-bottom: 20px;
`;

export const AddToCartButton = styled.button`
    background-color: #fcfaf3;
    color: #e86464;
    border: none;
    padding: 8px 16px;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    width: 100%;
    transition: all 0.3s ease;
    margin-top: auto;
    white-space: nowrap;

    &:hover {
        background-color: #fff8e6;
    }

    @media (max-width: 768px) {
        padding: 10px 16px;
        font-size: 15px;
    }

    @media (max-width: 576px) {
        padding: 12px 16px;
        font-size: 16px;
    }
`;

export const CloseButton = styled.button`
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