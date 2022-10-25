import axios from 'axios';
import { useQuery } from 'react-query';

const productDetailInfo = (productId) => () =>
  axios.get(`/api/v1/product/${productId}`, {
    headers: { 'Content-Type': 'application/json' },
  });

export const useProductDetail = (productId) =>
  useQuery(['productDetailInfo', productId], productDetailInfo(productId), {});
