import React, { useState, useEffect } from 'react';
import { InforEach, Label, InputField } from './SingupForm';
import styled from 'styled-components';
import { PW_REG } from '../../utils/reg';

export default function PasswordInputField({ setPasswordInfor }) {
  const [password, setPassword] = useState('');
  const [passwordValidty, setPasswordValidty] = useState(false);
  const [isPwFocused, setIsPwFocused] = useState(false);
  const [secondPw, setSecondPw] = useState('');
  const [isSecondPwFocused, setisSecondPwFocused] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(false);

  const checkPwMatch = (secondPwd) => {
    if (secondPwd === password) {
      setPasswordMatch(true);
      setPasswordInfor('isPasswordMatch', true);
    } else {
      setPasswordMatch(false);
      setPasswordInfor('isPasswordMatch', false);
    }
  };

  useEffect(() => {
    const validty = PW_REG.test(password);
    if (validty) {
      setPasswordValidty(true);
    } else {
      setPasswordValidty(false);
    }
    checkPwMatch(secondPw);
    setPasswordInfor('password', password);
  }, [password]);

  return (
    <>
      <InforEach>
        <Label>비밀번호</Label>
        <InputField
          type="password"
          maxLength="25"
          onFocus={() => {
            setIsPwFocused(true);
          }}
          onBlur={() => setIsPwFocused(false)}
          onChange={(e) => setPassword(e.target.value.trim())}
          value={password}
        />
        {isPwFocused &&
          (passwordValidty ? (
            <PwMessage color="blue">사용 가능한 비밀번호입니다.</PwMessage>
          ) : (
            <PwMessage color="red">
              영문과 숫자, 특수기호(@$!%*#?&)를 포함한 8자리 이상의 비밀번호를
              입력하세요.
            </PwMessage>
          ))}
      </InforEach>
      <InforEach>
        <Label>비밀번호 확인</Label>
        <InputField
          type="password"
          maxLength="25"
          value={secondPw}
          onChange={(e) => {
            setSecondPw(e.target.value);
            checkPwMatch(e.target.value);
          }}
          onFocus={() => {
            setisSecondPwFocused(true);
          }}
          onBlur={() => {
            setisSecondPwFocused(false);
          }}
        />
        {isSecondPwFocused &&
          secondPw &&
          (passwordMatch ? (
            <PwMessage color="blue">비밀번호가 일치합니다.</PwMessage>
          ) : (
            <PwMessage color="red">비밀번호가 일치하지 않습니다.</PwMessage>
          ))}
      </InforEach>
    </>
  );
}

const PwMessage = styled.div`
  width: 322px;
  font-size: 13px;
  color: ${(props) => props.color};
`;
