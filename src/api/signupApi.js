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

export const handleComplete =
  (id, password, email, gender, username) => async (e) => {
    e.preventDefault();
    console.log('working');

    const newUser = {
      birthday: '2000-10-03',
      email,
      gender: gender.slice(0, 1) || 'X',
      loginId: id,
      password,
      phone: '010-1234-5678',
      username,
    };

    await axios.post(
      'http://13.125.213.209/api/v1/user/join',
      JSON.stringify(newUser),
      { headers: { 'Content-Type': 'application/json' } }
    );
  };
