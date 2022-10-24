import axios from 'axios';
import { useQuery } from 'react-query';

const header = { 'Content-Type': 'application/json' };

const sendLoginInfo = (loginInfor) => () =>
  axios.post('/login', JSON.stringify(loginInfor), {
    headers: header,
  });

export const useSendLogin = (loginInfor) =>
  useQuery('loginInfor', sendLoginInfo(loginInfor), {
    retry: 0,
    enabled: false,
    refetchOnWindowFocus: false,
    manual: true,
  });
