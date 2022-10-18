import React from 'react';
import styled from 'styled-components';
import Title from '../components/login/Title';
import SingupForm from '../components/signup/SingupForm';

export default function Signup() {
  return (
    <SingupBox>
      <Title
        subText="나만의 특별함을 위해 LENSSIS."
        text="계정정보를 입력해주세요."
      />
      <SingupForm />
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
