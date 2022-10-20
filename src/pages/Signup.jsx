import React from 'react';
import styled from 'styled-components';
import Title from '../components/login/Title';
import SingupForm from '../components/signup/SingupForm';
import { usePostUser } from '../api/signupApi';
import { useDispatch, useSelector } from 'react-redux';
import { reset } from '../store/signupInfor';

export default function Signup() {
  const userInfor = useSelector((state) => state.singupInfor);
  const dispatch = useDispatch();
  const { refetch, onSuccess } = usePostUser(userInfor);

  const submitSignup = async (e) => {
    e.preventDefault();
    await refetch();
    onSuccess();
    dispatch(reset());
  };

  return (
    <SingupBox>
      <Title
        subText="나만의 특별함을 위해 LENSSIS."
        text="계정정보를 입력해주세요."
      />
      <SingupForm onSubmit={submitSignup} />
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
