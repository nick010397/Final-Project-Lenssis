import axios from 'axios';
import { useQuery } from 'react-query';

const header = { 'Content-Type': 'application/json' };

const getUserInfor = () =>
  axios.get('/api/v1/user/me', {
    headers: header,
  });

export const useGetUserInfor = () =>
  useQuery('loginInfor', getUserInfor, {
    retry: 0,
  });
