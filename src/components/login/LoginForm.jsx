import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import LoginInputField from './LoginInputField';

export default function LoginForm({ onSubmit, setLoginInfor }) {
  return (
    <form onSubmit={onSubmit}>
      <InputBox>
        <label>아이디</label>
        <LoginInputField name="loginId" setLoginInfor={setLoginInfor} />
      </InputBox>
      <InputBox>
        <label>비밀번호</label>
        <LoginInputField name="password" setLoginInfor={setLoginInfor} />
      </InputBox>

      <Button text="로그인" onClick={onSubmit} />
    </form>
  );
}

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 68px;
  width: 322px;
  margin-bottom: 30px;
  font-size: 14px;
  color: #606060;
`;
