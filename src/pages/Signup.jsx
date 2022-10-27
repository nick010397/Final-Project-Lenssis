import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import Title from '../components/login/Title';
import SingupForm from '../components/signup/SingupForm';
import Popup from '../components/common/Popup';
import { usePostUser } from '../api/signupApi';
import { validation } from '../utils/validation';

export default function Signup() {
  const [signupInfor, setSignupInfor] = useState({
    loginId: '',
    isloginIdUnique: false,
    password: '',
    isPasswordMatch: false,
    email: '',
    isemailUnique: false,
    username: '',
    birthday: '2000-10-05',
    gender: 'X',
    phone: '010-1234-5678',
  });
  const [errorMsg, setErrorMsg] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const { refetch } = usePostUser(signupInfor);

  const submitSignup = () => async (e) => {
    e.preventDefault();
    console.log(signupInfor);
    const {
      loginId,
      isloginIdUnique,
      password,
      isPasswordMatch,
      email,
      isemailUnique,
      username,
    } = signupInfor;

    const error =
      validation.loginId(loginId, isloginIdUnique) ||
      validation.password(password, isPasswordMatch) ||
      validation.email(email, isemailUnique) ||
      validation.username(username);

    if (error) {
      setErrorMsg(error);
      setShowPopup(true);
    } else {
      const { isSuccess, data } = await refetch({
        loginId,
        password,
        email,
        username,
        phone: signupInfor.phone,
        gender: signupInfor.gender,
        birthday: signupInfor.birthday,
      });
      if (isSuccess) {
        console.log(data);
        setErrorMsg('회원가입에 성공했습니다.');
        setShowPopup(true);
      }
    }
  };

  const setUserInfor = (name, value) => {
    setSignupInfor((infor) => ({ ...infor, [name]: value }));
  };

  return (
    <>
      <SingupBox>
        <Title
          subText="나만의 특별함을 위해 LENSSIS."
          text="계정정보를 입력해주세요."
        />
        <SingupForm onSubmit={submitSignup} setUserInfor={setUserInfor} />
      </SingupBox>
      {showPopup && <Popup message={errorMsg} show={setShowPopup} />}
    </>
  );
}

const SingupBox = styled.div`
  width: 534px;
  margin: 100px auto;
  border: solid gray 1px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Noto Sans KR';
`;
