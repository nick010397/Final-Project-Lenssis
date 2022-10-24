import styled from 'styled-components';
import DetailSection from '../components/ItemDetails/DetailSection';
import DetailWrap from '../components/ItemDetails/DetailWrap';
import Footer from '../components/common/Footer';
import NavBar from '../components/common/NavBar';
import Wrapslide from '../components/ItemDetails/DetailSlide';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useGetProducts } from '../api/productApi';

function ItemDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const { data, isLoading } = useGetProducts();

  useEffect(() => {
    setProduct(data.data.data.find((product) => product.id === parseInt(id)));
  }, [id]);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  console.log(product);

  return (
    <div>
      <Container>
        <NavBar />

        <DetailWrap product={product}></DetailWrap>
        <Wrapslide></Wrapslide>

        <DetailSection></DetailSection>

        <Footer />
      </Container>
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
