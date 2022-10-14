import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import Popup from './Popup';
import Button from './Button';
import axios from 'axios';

const PW_REG = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
const EMAIL_REG = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
const GENER_LIST = ['Male', 'Female'];

export default function SingupForm() {
  const [id, setId] = useState('');
  const [idValidity, setIdValidty] = useState(false);
  const [nickname, setNickname] = useState('');
  const [pwd, setPwd] = useState('');
  const [pwdValidty, setPwdValidty] = useState(false);
  const [isPwFocused, setIsPwFocused] = useState(false);
  const [isSecondPwFocused, setisSecondPwFocused] = useState(false);
  const [pwdMatch, setPwdMatch] = useState(false);
  const [email, setEmail] = useState('');
  const [emailValidty, setEmailValidty] = useState(false);
  const [gender, setGender] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  const setPopup = useCallback((message) => {
    setPopupMessage(message);
    setShowPopup(true);
  }, []);

  const checkIdValidty = async (e) => {
    e.preventDefault();

    try {
      await axios.get(
        `http://13.125.213.209/api/v1/user/exists/loginId?loginId=${id}`
      );
      setPopup('사용 가능한 아이디입니다.');
      setIdValidty(true);
    } catch {
      setPopup('이미 사용중인 아이디입니다.');
      setIdValidty(false);
    }
  };

  const checkEmailValidty = async (e) => {
    e.preventDefault();
    const valid = EMAIL_REG.test(email);

    if (!valid) {
      setPopup('올바른 이메일 형식이 아닙니다.');
      setEmailValidty(false);
      return;
    }

    try {
      await axios.get(
        `http://13.125.213.209/api/v1/user/exists/email?email=${email}`
      );
      setPopup('사용 가능한 이메일입니다.');
      setEmailValidty(true);
    } catch {
      setPopup('이미 사용 중인 이메일 아이디입니다.');
      setEmailValidty(false);
    }
  };

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

  const handleComplete = async (e) => {
    e.preventDefault();
    console.log('working');
    if (!idValidity) {
      setPopup('아이디 중복 확인이 필요합니다.');
    } else if (!emailValidty) {
      setPopup('이메일 중복 확인이 필요합니다.');
    } else if (!pwdValidty) {
      setIsPwFocused(true);
    } else if (!pwdMatch) {
      setisSecondPwFocused(true);
    } else {
      const newUser = {
        birthday: '2000-10-03',
        email,
        gender: gender || 'X',
        loginId: id,
        password: pwd,
        phone: '010-1234-5678',
        username: nickname,
      };
      await axios.post(
        'http://13.125.213.209/api/v1/user/join',
        JSON.stringify(newUser)
      );
      setPopup('회원가입에 성공하셨습니다.');
    }
  };

  return (
    <>
      <InforBox noValidate>
        <InforEach>
          <Label>아이디</Label>
          <InputField
            short={true}
            type="text"
            value={id}
            onChange={(e) => {
              setId(e.target.value);
            }}
          />
          <RepetitionCheckBtn onClick={checkIdValidty}>
            중복 확인
          </RepetitionCheckBtn>
        </InforEach>
        <InforEach>
          <Label>이메일</Label>
          <InputField
            short={true}
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <RepetitionCheckBtn onClick={checkEmailValidty}>
            중복 확인
          </RepetitionCheckBtn>
        </InforEach>
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
          onClick={handleComplete}
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

const InforEach = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;
const Label = styled.label`
  font-size: 14px;
  color: #606060;
  padding-bottom: 15px;
`;

const InputField = styled.input.attrs({ requried: true })`
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

const RepetitionCheckBtn = styled.button`
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
