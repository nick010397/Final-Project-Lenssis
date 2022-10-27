import axios from 'axios';

const productsInfo = () =>
  axios.get('/api/v1/product?size=29', {
    headers: { 'Content-Type': 'application/json' },
  });

export const getProductPage = async (pageParam = 1) => {
  const response = await productsInfo.get(`/posts?_page=${pageParam}`);
  return response.data.data;
};
