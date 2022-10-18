import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import Popup from '../login/Popup';
import Button from '../login/Button';
import { handleComplete } from '../../api/signupApi';
import CheckInputField from './CheckInputField';

const PW_REG = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
const GENER_LIST = ['Male', 'Female'];

export default function SingupForm() {
  const [nickname, setNickname] = useState('');
  const [pwd, setPwd] = useState('');
  const [pwdValidty, setPwdValidty] = useState(false);
  const [isPwFocused, setIsPwFocused] = useState(false);
  const [isSecondPwFocused, setisSecondPwFocused] = useState(false);
  const [pwdMatch, setPwdMatch] = useState(false);
  const [gender, setGender] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  // const setPopup = useCallback((message) => {
  //   setPopupMessage(message);
  //   setShowPopup(true);
  // }, []);

  const checkPwMatch = (e) => {
    const value = e.target.value;
    if (value === pwd) {
      setPwdMatch(true);
    } else {
      setPwdMatch(false);
    }
  };

  useEffect(() => {
    const validty = PW_REG.test(pwd);
    if (validty) {
      setPwdValidty(true);
    } else {
      setPwdValidty(false);
    }
  }, [pwd]);

  return (
    <>
      <InforBox noValidate>
        <CheckInputField title={'아이디'} name={'loginId'} />
        <CheckInputField title={'이메일'} name={'email'} />
        <InforEach>
          <Label>닉네임</Label>
          <InputField
            type="text"
            maxLength="20"
            value={nickname}
            onChange={(e) => {
              setNickname(e.target.value);
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
            onChange={(e) => setPwd(e.target.value.trim())}
            value={pwd}
          />
          {isPwFocused &&
            (pwdValidty ? (
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
            (pwdMatch ? (
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
                  setGender(e.target.value);
                }}
              />
            </RadioEach>
          ))}
        </InforEach>
        <Button
          infor={{ text: '완료', disabled: false }}
          onClick={handleComplete('id', pwd, 'email', gender, nickname)}
        />
      </InforBox>
      {showPopup && <Popup message={popupMessage} show={setShowPopup} />}
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
