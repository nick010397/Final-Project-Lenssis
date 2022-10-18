import axios from 'axios';
import { useQuery } from 'react-query';

const checkValidityFromServer = (query, queryValue) => () =>
  axios.get(
    `http://13.125.213.209/api/v1/user/exists/${query}?${query}=${queryValue}`
  );

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
  axios.post('http://13.125.213.209/api/v1/user/join', JSON.stringify(infor), {
    headers: { 'Content-Type': 'application/json' },
  });

export const usePostUser = (infor) =>
  useQuery('user', sendUserInfoToServer(infor), {
    enabled: false,
    refetchOnWindowFocus: false,
    manual: true,
    onSuccess: () => {
      alert('회원가입에 성공하셨습니다');
    },
  });
