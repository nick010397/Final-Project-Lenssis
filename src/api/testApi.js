import axios from 'axios';
import { useQuery } from 'react-query';

const productsInfo = (i) =>
  axios.get(`/api/v1/product/?order_by=${i}`, {
    headers: { 'Content-Type': 'application/json' },
  });
//내가 어떤걸가져온다

export const useProducts = (i) =>
  useQuery(['productsInfo', i], productsInfo(i), {
    onError: (e) => {
      console.log(e.message);
    },
  });
