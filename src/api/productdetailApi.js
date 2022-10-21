import axios from 'axios';
import { useQuery } from 'react-query';

<<<<<<< HEAD
const productsInfo = () =>
  axios.get('/api/v1/product', {
    headers: { 'Content-Type': 'application/json' },
  });

export const useGetProducts = () =>
  useQuery(['productsInfo', productsInfo, {
    onError: (e) => {
      console.log(e.message);
    },
  });
=======
const productDetailInfo = (productId) =>
  axios.get(`/api/v1/product/${productId}`, {
    headers: { 'Content-Type': 'application/json' },
  });

export const useProductDetail = (productId) => {
  useQuery(['productDetailInfo', productId], productDetailInfo(productId), {});
};
>>>>>>> 79401a0673673bdf369265ee7246ef203b565996
