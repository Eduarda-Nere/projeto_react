import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from './services/store';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import RestaurantDetails from './pages/RestaurantDetail';
import CartSidebar from './components/CartSidebar';
import LoadingPage from './components/LoadingPage';
import { GlobalStyle } from '../src/styles/global';
import styled from 'styled-components';

interface OverlayProps {
  $isOpen: boolean;
}

const Overlay = styled.div<OverlayProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1000;
  pointer-events: auto;
  transition: opacity 0.3s ease;
  opacity: ${props => props.$isOpen ? 1 : 0};
  visibility: ${props => props.$isOpen ? 'visible' : 'hidden'};
`;

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleBeforeUnload = () => {
      const state = store.getState();
      localStorage.setItem('cart', JSON.stringify(state.cart));
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isCartOpen]);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <Provider store={store}>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route 
            path="/restaurante/:id" 
            element={
              <>
                <RestaurantDetails 
                  onCartClick={() => setIsCartOpen(true)}
                  onModalOpen={() => setIsCartOpen(false)} 
                />
                
                <Overlay 
                  $isOpen={isCartOpen} 
                  onClick={() => setIsCartOpen(false)}
                />
                
                <CartSidebar 
                  isOpen={isCartOpen}
                  onClose={() => setIsCartOpen(false)} 
                />
              </>
            } 
          />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;