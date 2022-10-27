import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { useLogout } from '../api/loginApi';
import { useGetUserInfor } from '../api/userApi';
import Button from '../components/login/Button';

export default function MyPage() {
  const isLogin = useSelector((state) => state.isLogin);
  const navigate = useNavigate();
  const { status, error, data } = useGetUserInfor();
  //useMutation 공부해서 사용해봅시다
  // const {
  //   data: {
  //     data: { username, birthday, phone, gender, joinedAt },
  //   },
  // } = data;
  const { refetch } = useLogout();

  useEffect(() => {
    if (!isLogin) {
      navigate('/login');
    }
  }, []);

  return (
    <PageWrapper>
      <Title>My Page</Title>
      {status === 'loading' ? (
        <div>Loading...</div>
      ) : status === 'error' ? (
        <div>{error.message}</div>
      ) : (
        <>
          '로그인에 성공하셨습니다.'
          {console.log(data.data.data)}
        </>
        // <PageContent>
        //   <div>닉네임: {data.data.data.username}</div>
        //   <div>
        //     성별:{' '}
        //     {data.data.data.gender === 'X'
        //       ? 'Not chosen'
        //       : data.data.data.gender === 'F'
        //       ? 'Female'
        //       : 'Male'}
        //   </div>
        //   <div>생일: {data.data.data.birthday}</div>
        //   <div>전화번호: {data.data.data.phone}</div>
        //   <div>가입날짜: {data.data.data.joinedAt}</div>
        //   <Buttons>
        //     <Button
        //       text="로그아웃"
        //       onClick={() => {
        //         const { data } = refetch();
        //         console.log(data);
        //       }}
        //     ></Button>
        //     <Button text="회원 정보 수정"></Button>
        //   </Buttons>
        // </PageContent>
      )}
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 700px;
  border: 1px solid black;
  margin: 20px auto;
`;

const Title = styled.h1`
  margin-bottom: 50px;
`;

const PageContent = styled.div`
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
`;
