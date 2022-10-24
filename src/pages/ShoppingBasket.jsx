import React from 'react';
import { Cart } from '../components/cart/Cart';
import Footer from '../components/common/Footer';
import NavBar from '../components/common/NavBar';

function ShoppingBasket() {
  return (
    <>
      <NavBar />
      <Cart />
      <Footer />
    </>
  );
}

export default ShoppingBasket;
