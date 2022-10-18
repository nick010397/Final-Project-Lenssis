import axios from 'axios';
import { useQuery } from 'react-query';

const sendLoginInfo = (loginInfor) => () =>
  axios.post('http://13.125.213.209/login', JSON.stringify(loginInfor));

export const useSendLogin = (loginInfor) =>
  useQuery('loginInfor', sendLoginInfo(loginInfor), {
    enable: false,
    refetchOnWindowFocus: false,
    manual: true,
  });
