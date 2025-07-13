import React from 'react';
import { BounceLoader } from 'react-spinners';
import styled from 'styled-components';

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #fcfaf3;
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
      <BounceLoader color="#e86464" />
      <LoadingText>Carregando...</LoadingText>
    </LoadingContainer>
  );
};

export default LoadingPage;