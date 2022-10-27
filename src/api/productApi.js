import axios from 'axios';
import { useQuery } from 'react-query';

const productsInfo = () =>
  axios.get('/api/v1/product?size=29', {
    headers: { 'Content-Type': 'application/json' },
  });
//내가 어떤걸가져온다

export const useGetProducts = () =>
  useQuery('productsInfo', productsInfo, {
    onError: (e) => {
      console.log(e.message);
    },
  });

const getProductList = (page) => () =>
  axios.get(`/api/v1/product?page=${page}&size=9`, {
    headers: { 'Content-Type': 'application/json' },
  });

export const useGetProductList = (page) =>
  useQuery(['productList', page], getProductList(page), {
    retry: 0,
  });
