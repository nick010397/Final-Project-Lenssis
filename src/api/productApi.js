import axios from 'axios';
import { useQuery } from 'react-query';

const productsInfo = () =>
  axios.get('/api/v1/product', {
    headers: { 'Content-Type': 'application/json' },
  });

export const useGetProducts = () =>
  useQuery('productsInfo', productsInfo, {
    onError: (e) => {
      console.log(e.message);
    },
  });
