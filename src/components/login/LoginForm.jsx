import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from './Button';
import LoginInputField from './LoginInputField';

export default function LoginForm() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [isIdOnFocus, setIsIdOnFoucs] = useState(false);
  const [isPwOnFocus, setIsPwOnFoucs] = useState(false);
  const [validty, setValidty] = useState(true);

  useEffect(() => {
    console.log('working');
    setValidty(!(id.length >= 5 && pw.length >= 8));
  }, [id, pw]);

  return (
    <form method="post">
      <InputBox>
        <label>아이디</label>
        <LoginInputField
          name={'id'}
          value={id}
          setValue={setId}
          focused={isIdOnFocus}
          setFocused={setIsIdOnFoucs}
        />
      </InputBox>
      <InputBox>
        <label>비밀번호</label>
        <LoginInputField
          name={'pw'}
          value={pw}
          setValue={setPw}
          focused={isPwOnFocus}
          setFocused={setIsPwOnFoucs}
        />
      </InputBox>

      <Button infor={{ text: '로그인', disabled: validty }} />
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
