import React from 'react';
import styled from 'styled-components';
import DetailSection from '../components/ItemDetails/DetailSection';
import DetailWrap from '../components/ItemDetails/DetailWrap';
import Footer from '../components/common/Footer';
import NavBar from '../components/common/NavBar';
import Wrapslide from '../components/ItemDetails/DetailSlide';
import ShoppingBasketModal from '../modals/ShoppingBasketModal';

function ItemDetail() {
  return (
    <div>
      <NavBar />
      <Container>
        <DetailWrap></DetailWrap>
        <Wrapslide></Wrapslide>
        <ShoppingBasketModal></ShoppingBasketModal>

        <DetailSection></DetailSection>
      </Container>

      <Footer />
    </div>
  );
}
const Container = styled.div`
  width: 100%;
  height: auto;
  margin: 0 auto;
  padding: 0;
`;

export default ItemDetail;
