import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import Title from '../components/login/Title';
import SingupForm from '../components/signup/SingupForm';
import { usePostUser } from '../api/signupApi';

export default function Signup() {
  const [singUpInfor, setSignupInfor] = useState({
    loginId: '',
    password: '',
    email: '',
    username: '',
    birthday: '2000-10-05',
    gender: 'X',
    phone: '010-1234-5678',
  });
  const { refetch } = usePostUser(singUpInfor);
  console.log(singUpInfor);

  const submitSignup = async (e) => {
    e.preventDefault();
    const { isSuccess, onSuccess, data } = await refetch();
    if (isSuccess) {
      console.log(data);
      onSuccess();
    }
  };

  return (
    <SingupBox>
      <Title
        subText="나만의 특별함을 위해 LENSSIS."
        text="계정정보를 입력해주세요."
      />
      <SingupForm onSubmit={submitSignup} setSignupInfor={setSignupInfor} />
    </SingupBox>
  );
}

const SingupBox = styled.div`
  width: 534px;
  border: solid gray 1px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Noto Sans KR';
`;
