import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DetailContainer from '../components/ItemDetails/DetailContainer';
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
      <DetailContainer></DetailContainer>
    </div>
  );
}

export default ItemDetail;
