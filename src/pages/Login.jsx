import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import LoginForm from '../components/login/LoginForm';
import LoginOther from '../components/login/LoginOther';
import Title from '../components/login/Title';
import Popup from '../components/login/Popup';
import { useSendLogin } from '../api/loginApi';
import { useNavigate } from 'react-router';

export default function Login() {
  const [loginInfor, setLoginInfor] = useState({ loginId: '', password: '' });
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const { refetch } = useSendLogin(loginInfor);
  const navigate = useNavigate();

  const tryToLogin = async (e) => {
    e.preventDefault();
    console.log(loginInfor.loginId, !loginInfor.loginId);
    if (!loginInfor.loginId) {
      setPopupMessage('아이디를 입력하세요');
      setShowPopup(true);
      return;
    }
    if (!loginInfor.password) {
      setPopupMessage('비밀번호를 입력하세요');
      setShowPopup(true);
      return;
    }

    const data = await refetch();
    console.log(data);

    navigate('/');
  };

  return (
    <Container>
      <LoginFormBox>
        <Title
          subText="나만의 특별함을 위해 LENSSIS에서"
          text="렌즈의 진짜 정보를 찾아보세요."
        />
        <LoginForm onSubmit={tryToLogin} setLoginInfor={setLoginInfor} />
        <LoginOther />
      </LoginFormBox>
      {showPopup && <Popup show={setShowPopup} message={popupMessage} />}
    </Container>
  );
}
const Container = styled.div`
  height: inherit;
`;

const LoginFormBox = styled.div`
  box-sizing: border-box;
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 534px;
  height: 612px;
  border: 1.5px solid gray;
  border-radius: 4px;
`;
