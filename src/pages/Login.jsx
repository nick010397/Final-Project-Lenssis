import React from 'react';
import styled from 'styled-components';
import NavBar from '../components/common/NavBar';
import Footer from '../components/common/Footer';
import LoginForm from '../components/login/LoginForm';
import LoginOther from '../components/login/LoginOther';
import Title from '../components/login/Title';
import { useSendLogin } from '../api/loginApi';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

export default function Login() {
  const loginInfor = useSelector((state) => state.loginInfor);
  const { refetch, data } = useSendLogin(loginInfor);
  const navigate = useNavigate();

  return (
    <>
      <NavBar />
      <LoginFormBox>
        <Title
          subText="나만의 특별함을 위해 LENSSIS에서"
          text="렌즈의 진짜 정보를 찾아보세요."
        />
        <LoginForm
          onSubmit={async (e) => {
            e.preventDefault();
            await refetch();
            navigate('/');
          }}
        />
        <LoginOther />
      </LoginFormBox>
      {/* <Footer /> */}
    </>
  );
}

const LoginFormBox = styled.div`
  box-sizing: border-box;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 534px;
  height: 612px;
  border: 1.5px solid gray;
  border-radius: 4px;
`;
