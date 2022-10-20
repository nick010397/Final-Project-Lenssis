import axios from 'axios';
import { useQuery } from 'react-query';

const header = { 'Content-Type': 'application/json' };

const checkValidityFromServer = (query, queryValue) => () =>
  axios.get(`/api/v1/user/exists/${query}?${query}=${queryValue}`, {
    headers: header,
  });

export const useCheckValidity = (query, queryValue) => {
  return useQuery(
    `${query}Validity`,
    checkValidityFromServer(query, queryValue),
    {
      enabled: false,
    }
  );
};

const sendUserInfoToServer = (infor) => () =>
  axios.post('/api/v1/user/join', JSON.stringify(infor), {
    headers: header,
  });

export const usePostUser = (infor) =>
  useQuery('user', sendUserInfoToServer(infor), {
    retry: 0,
    enabled: false,
    refetchOnWindowFocus: false,
    manual: true,
    onSuccess: () => {
      alert('회원가입에 성공하셨습니다');
    },
  });
