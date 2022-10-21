<<<<<<< HEAD
import styled from 'styled-components';
import DetailSection from '../components/ItemDetails/DetailSection';
import DetailWrap from '../components/ItemDetails/DetailWrap';
import Footer from '../components/common/Footer';
import NavBar from '../components/common/NavBar';
import Wrapslide from '../components/ItemDetails/DetailSlide';

function ItemDetail() {
=======
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DetailContainer from '../components/ItemDetails/DetailContainer';

function ItemDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  console.log(typeof id);
  useEffect(() => {
    axios.get('/api/v1/product').then((data) => {
      setProduct(data.data.data.find((product) => product.id === parseInt(id)));
    });
  }, [id]);

  console.log(product);

>>>>>>> 79401a0673673bdf369265ee7246ef203b565996
  return (
    <div>
      <NavBar />

      <DetailWrap></DetailWrap>
      <Wrapslide></Wrapslide>

      <DetailSection></DetailSection>

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
