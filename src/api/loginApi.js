import axios from 'axios';
import { useQuery } from 'react-query';

const sendLoginInfo = (loginInfor) => () =>
  axios.post('/login', JSON.stringify(loginInfor), {
    headers: { 'Content-Type': 'application/json' },
  });

export const useSendLogin = (loginInfor) =>
  useQuery('loginInfor', sendLoginInfo(loginInfor), {
    enable: false,
    refetchOnWindowFocus: false,
    manual: true,
  });
