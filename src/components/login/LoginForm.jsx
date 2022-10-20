import React, { useState } from 'react';
import styled from 'styled-components';
import deleteIcon from '../../static/img/VectordeleteIcon.png';

const emailReg = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [isemailOnFocus, setIsemailOnFoucs] = useState(false);
  const [isPwOnFocus, setIsPwOnFoucs] = useState(false);

  return (
    <form method="post">
      <InputBox>
        <label>이메일</label>
        <div>
          <InputField
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value.trim())}
            onFocus={() => {
              setIsemailOnFoucs(true);
            }}
          />
          <DeleteBtn
            onClick={() => {
              setEmail('');
            }}
            style={{
              display: isemailOnFocus && email ? 'inline' : 'none',
            }}
          />
        </div>
      </InputBox>
      <InputBox>
        <label>비밀번호</label>
        <div>
          <InputField
            maxLength="25"
            type="password"
            value={pw}
            onChange={(e) => setPw(e.target.value.trim())}
            onFocus={() => {
              setIsPwOnFoucs(true);
            }}
          />
          <DeleteBtn
            style={{
              transform: 'translate(-50px, 15px)',
              display: isPwOnFocus && pw ? 'inline' : 'none',
            }}
            onClick={() => {
              setPw('');
            }}
          />
        </div>
      </InputBox>

      <ButtonSt
        type="submit"
        disabled={!(emailReg.test(email) && pw.length >= 8)}
      >
        로그인
      </ButtonSt>
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

const InputField = styled.input`
  border: none;
  border-bottom: 2px solid #f0f0f0;
  padding-bottom: 8px;
  font-size: 18px;
  margin-top: 10px;
  width: 90%;

  &:focus {
    outline: none;
    border-bottom: 2px solid #23314a;
  }
`;

const DeleteBtn = styled.img.attrs({ src: deleteIcon, alt: 'delete Icon' })`
  width: 16.67px;
  height: 16.67px;
  position: absolute;
  transform: translate(-27px, 15px);
  cursor: pointer;
`;

const ButtonSt = styled.button`
  width: 322px;
  height: 48px;
  font-size: 16px;
  background: #23314a;
  border-radius: 6px;
  border: none;
  color: white;
  &:hover {
    cursor: pointer;
  }

  &:disabled {
    background-color: rgba(23, 23, 23, 0.25);
  }
`;
