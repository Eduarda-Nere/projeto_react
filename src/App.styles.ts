import styled from 'styled-components';

export const RestaurantList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 48px;
  padding: 80px;
  max-width: 1024px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    padding: 60px;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 40px;
  }

  @media (max-width: 768px) {
    padding: 40px 20px;
    grid-template-columns: 1fr;
    gap: 30px;
  }

  @media (max-width: 480px) {
    padding: 30px 15px;
    gap: 20px;
  }
`;