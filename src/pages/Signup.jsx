import React from 'react';
import styled from 'styled-components';
import Title from '../components/login/Title';
import SingupForm from '../components/login/SingupForm';

export default function Signup() {
  return (
    <SingupBox>
      <Title
        message={{
          small: '나만의 특별함을 위해 LENSSIS.',
          big: '계정정보를 입력해주세요.',
        }}
      />
      <SingupForm />
    </SingupBox>
  );
}

const SingupBox = styled.div`
  width: 534px;
  height: 858px;
  border: solid gray 1px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Noto Sans KR';
`;