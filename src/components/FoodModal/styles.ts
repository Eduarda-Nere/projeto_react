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
`;

export const ModalContainer = styled.div`
    background-color: #e86464;
    display: flex;
    max-width: 1000px;  
    width: 90%;
    height: 300px;    
    overflow: hidden;
    position: relative;
`;

export const ModalImage = styled.div<{ src: string }>`
    background-image: url(${({ src }) => src});
    background-size: cover;
    background-position: center;
    width: calc(50% - 18px); 
    height: calc(100% - 18px); 
    margin: 9px;        
`;

export const ModalContent = styled.div`
    padding: 20px;
    width: 65%;
    color: white;
    display: flex;
    flex-direction: column;
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
    padding: 8px 10px;
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;
    width: 60%;
    height: 40px;
    transition: all 0.3s ease;

    &:hover {
        background-color: #fff8e6;
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