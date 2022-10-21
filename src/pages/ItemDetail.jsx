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

  return (
    <div>
      <DetailContainer></DetailContainer>
    </div>
  );
}

export default ItemDetail;
