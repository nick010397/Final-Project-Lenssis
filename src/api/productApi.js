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
<<<<<<< HEAD
  axios.get(`api/v1/product?page=${page}&size = 10`, {
=======
  axios.get(`/api/v1/product?page=${page}&size=9`, {
>>>>>>> 30b35de7b8acda4a4e678a4181be591f83bcdb08
    headers: { 'Content-Type': 'application/json' },
  });

export const useGetProductList = (page) =>
<<<<<<< HEAD
  useQuery('productList', getProductList(page));
=======
  useQuery(['productList', page], getProductList(page), {
    retry: 0,
  });
>>>>>>> 30b35de7b8acda4a4e678a4181be591f83bcdb08
