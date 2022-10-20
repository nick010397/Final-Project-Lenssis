import axios from 'axios';

const productsInfo = () => () => {
  axios.get('/product', { headers: { 'Content-Type': 'application/json' } });
};
