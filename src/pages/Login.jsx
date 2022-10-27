import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import LoginForm from '../components/login/LoginForm';
import LoginOther from '../components/login/LoginOther';
import Title from '../components/login/Title';
import Popup from '../components/common/Popup';
import { useSendLogin } from '../api/loginApi';
import { useNavigate } from 'react-router';
import { validation } from '../utils/validation';
import { useDispatch, useSelector } from 'react-redux';
import { setLogIn } from '../store/loginInfor';

export default function Login() {
  const [loginInfor, setLoginInfor] = useState({ loginId: '', password: '' });
  const [showPopup, setShowPopup] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const { refetch } = useSendLogin(loginInfor);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.isLogin);

  useEffect(() => {
    if (isLogin) {
      navigate('/myPage');
    }
  }, []);

  const tryToLogin = async (e) => {
    e.preventDefault();
    const { loginId, password } = loginInfor;
    const clientError =
      validation.idforLogin(loginId) || validation.pwforLogin(password);
    if (clientError) {
      setErrorMsg(clientError);
      setShowPopup(true);
    } else {
      const { isError } = await refetch();
      if (isError) {
        setErrorMsg('존재하지 않는 아이디이거나 비밀번호가 틀립니다.');
        setShowPopup(true);
      } else {
        dispatch(setLogIn({ login: true }));
        navigate('/');
      }
    }
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
      {showPopup && <Popup show={setShowPopup} message={errorMsg} />}
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
