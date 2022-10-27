import React from 'react';
import styled from 'styled-components';
import { useGetUserInfor } from '../api/userApi';

export default function MyPage() {
  const { status, error, data } = useGetUserInfor();
  // const { username, birthday, phone, gender, joinedAt } = data.data.data;

  return (
    <PageWrapper>
      <h1>My Page</h1>
      {status === 'loading' ? (
        <div>Loading...</div>
      ) : status === 'error' ? (
        <div>{error.message}</div>
      ) : (
        <div>
          <div>User Name: {data.data.data.username}</div>
          <div>
            Gender:{' '}
            {data.data.data.gender === 'X'
              ? 'Not chosen'
              : data.data.data.gender}
          </div>
          <div>birthday: {data.data.data.birthday}</div>
          <div>phone Number: {data.data.data.phone}</div>
          <div>Joined at: {data.data.data.joinedAt}</div>
        </div>
      )}
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 500px;
  border: 1px solid black;
  margin: 20px auto;
`;
