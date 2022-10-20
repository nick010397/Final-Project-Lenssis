import axios from 'axios';
import { useQuery } from 'react-query';

const productsInfo = () => () =>
  axios.get('/product', { headers: { 'Content-Type': 'application/json' } });

export const useGetProducts = () =>
  useQuery('productsInfo', productsInfo, {
    refetchOnWindowFocus: false,
    retry: 0,
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (e) => {
      console.log(e.message);
    },
  });
