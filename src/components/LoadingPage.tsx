import React from 'react';
import styled from 'styled-components';
import logo from './loader.gif';

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #fcfaf3;
`;

const LoadingLogo = styled.img`
  width: 150px;
  height: auto;
  margin-bottom: 30px;
  animation: pulse 1.5s infinite ease-in-out;

  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
  }
`;

const LoadingText = styled.p`
  margin-top: 20px;
  color: #e86464;
  font-size: 18px;
  font-weight: bold;
`;

const LoadingPage: React.FC = () => {
  return (
    <LoadingContainer>
      <LoadingLogo src={logo} alt="Logo" />
      <LoadingText>Carregando...</LoadingText>
    </LoadingContainer>
  );
};

export default LoadingPage;