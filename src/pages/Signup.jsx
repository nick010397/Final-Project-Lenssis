import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import Title from '../components/login/Title';
import SingupForm from '../components/signup/SingupForm';
import { usePostUser } from '../api/signupApi';

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
  const { refetch } = usePostUser(signupInfor);
  console.log(signupInfor);

  const submitSignup = () => async (e) => {
    e.preventDefault();

    const validation = {
      loginId: (id, uniquness) => {
        if (id.length < 8) {
          return '아이디는 8글자 이상이여합니다.';
        }
        if (!uniquness) {
          return '아이디 중복 확인 해주세요.';
        }
      },
      email: (email, uniquness) => {
        if (email) {
          return '유효한 형식의 이메일이 아닙니다.';
        }
        if (uniquness) {
          return '이메일 중복 확인 해주세요.';
        }
      },
      password: (password, match) => {
        if (!password) {
          return '유요한 형식의 비밀번호가 아닙니다.';
        }
        if (match) {
          return '비밀번호가 일치하지 않습니다.';
        }
      },
      username: (username) => {
        if (!username) {
          return '닉네임을 입력하세요.';
        }
      },
    };

    const { isSuccess, onSuccess, data } = await refetch();
    if (isSuccess) {
      console.log(data);
      onSuccess();
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
