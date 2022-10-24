import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import Button from '../login/Button';
import CheckInputField from './CheckInputField';

const PW_REG = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
const GENER_LIST = ['Male', 'Female'];

export default function SingupForm({ onSubmit, setUserInfor }) {
  const [password, setPassword] = useState('');
  const [passwordValidty, setPasswordValidty] = useState(false);
  const [isPwFocused, setIsPwFocused] = useState(false);
  const [isSecondPwFocused, setisSecondPwFocused] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(false);

  const checkPwMatch = (e) => {
    const value = e.target.value;
    if (value === password) {
      setPasswordMatch(true);
    } else {
      setPasswordMatch(false);
    }
    setUserInfor('password', value);
  };

  useEffect(() => {
    const validty = PW_REG.test(password);
    if (validty) {
      setPasswordValidty(true);
    } else {
      setPasswordValidty(false);
    }
    setUserInfor('password', password);
  }, [password]);

  return (
    <>
      <InforBox noValidate onSubmit={onSubmit}>
        <CheckInputField
          title={'아이디'}
          name={'loginId'}
          setUserInfor={setUserInfor}
        />
        <CheckInputField
          title={'이메일'}
          name={'email'}
          setUserInfor={setUserInfor}
        />
        <InforEach>
          <Label>닉네임</Label>
          <InputField
            type="text"
            maxLength="20"
            onChange={(e) => {
              setUserInfor('username', e.target.value);
            }}
          />
        </InforEach>
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
            onChange={checkPwMatch}
            onFocus={() => {
              setisSecondPwFocused(true);
            }}
            onBlur={() => {
              setisSecondPwFocused(false);
            }}
          />
          {isSecondPwFocused &&
            (passwordMatch ? (
              <PwMessage color="blue">비밀번호가 일치합니다.</PwMessage>
            ) : (
              <PwMessage color="red">비밀번호가 일치하지 않습니다.</PwMessage>
            ))}
        </InforEach>
        <InforEach>
          <Label>성별 ( 선택 )</Label>
          {GENER_LIST.map((gender) => (
            <RadioEach key={gender}>
              <span>{gender === 'Male' ? '남성' : '여성'}</span>
              <input
                type="radio"
                name="gender"
                value={gender}
                onChange={(e) => {
                  setUserInfor('gender', e.target.value.slice(0, 1));
                }}
              />
            </RadioEach>
          ))}
        </InforEach>
        <Button
          text="완료"
          onClick={onSubmit(passwordValidty, passwordMatch)}
        />
      </InforBox>
      {/* ///{false && <Popup message={popupMessage} show={setShowPopup} />} */}
    </>
  );
}

const InforBox = styled.form`
  display: flex;
  flex-direction: column;
`;

export const InforEach = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;
export const Label = styled.label`
  font-size: 14px;
  color: #606060;
  padding-bottom: 15px;
`;

export const InputField = styled.input.attrs({ requried: true })`
  border: none;
  border-bottom: 2px solid #f0f0f0;
  width: ${(props) => (props.short ? '238px' : '322px')};
  height: 16px;
  padding-bottom: 8px;

  &:focus {
    outline: none;
  }

  &::-ms-reveal,
  ::-ms-clear {
    display: none;
  }
`;

export const RepetitionCheckBtn = styled.button`
  position: absolute;
  transform: translate(260px, 10px);
  width: 72px;
  height: 48px;
  background-color: white;
  border: 1px solid #dedede;
  cursor: pointer;
`;

const PwMessage = styled.div`
  width: 322px;
  font-size: 13px;
  color: ${(props) => props.color};
`;

const RadioEach = styled.label`
  font-size: 14px;
  display: flex;
  flex-direction: row;
  width: 60px;
  padding-bottom: 5px;
  justify-content: space-between;
`;
