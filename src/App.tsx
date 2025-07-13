import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from './services/store';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import RestaurantDetails from './pages/RestaurantDetail';
import CartSidebar from './components/CartSidebar';
import { GlobalStyle } from '../src/styles/global';
import * as S from './App.styles';

function App() {
    const [isCartOpen, setIsCartOpen] = useState(false);

    useEffect(() => {
        const handleBeforeUnload = () => {
            const state = store.getState();
            localStorage.setItem('cart', JSON.stringify(state.cart));
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
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

                                <S.Overlay
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