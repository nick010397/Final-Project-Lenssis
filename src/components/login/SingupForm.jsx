import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import Popup from './Popup';
import Title from './Title';

const pwReg = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
const emailReg = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

export default function SingupForm() {
  const [nickname, setNickname] = useState('');
  const [pw, setPw] = useState('');
  const [pwValidty, setPwValidty] = useState(false);
  const [isPwFocused, setIsPwFocused] = useState(false);
  const [secondPw, setSecondPw] = useState('');
  const [isSecondPwFocused, setisSecondPwFocused] = useState(false);
  const [pwMatch, setPwMatch] = useState(false);
  const [email, setEmail] = useState('');
  const [emailValidty, setEmailValidty] = useState(false);
  const [gender, setGender] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  const checkRepetition = async (e) => {
    e.preventDefault();
    const target = e.target.id;
    if (target === 'email') {
      if (emailValidty) {
        console.log('유효함!');
      } else {
        setPopupMessage('유효하지 않는 형식의 이메일입니다.');
        setShowPopup(true);
      }
    }

    if (target === 'id') {
      setPopupMessage('사용할 수 있는 ID입니다.');
      setShowPopup(true);
    }
  };

  const checkPwMatch = (e) => {
    const value = e.target.value.trim();
    setSecondPw(value);
    if (value === pw) {
      setPwMatch(true);
    } else {
      setPwMatch(false);
    }
  };

  const handleComplete = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    const validty = pwReg.test(pw);
    if (validty) {
      setPwValidty(true);
    } else {
      setPwValidty(false);
    }
  }, [pw]);

  useEffect(() => {
    const validty = emailReg.test(email);
    if (validty) {
      setEmailValidty(true);
    } else {
      setEmailValidty(false);
    }
  }, [email]);

  return (
    <>
      <InforBox noValidate>
        <InforEach>
          <Label>이메일</Label>
          <InputField
            short={true}
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
          <RepetitionCheckBtn id="email" onClick={checkRepetition}>
            중복 확인
          </RepetitionCheckBtn>
        </InforEach>
        <InforEach>
          <Label>닉네임</Label>
          <InputField
            type="text"
            maxLength="20"
            onChange={(e) => {
              setNickname(e.target.value.trim().replace(/[^a-zA-Z0-9]/g, ''));
            }}
            value={nickname}
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
            onChange={(e) => setPw(e.target.value.trim())}
            value={pw}
          />
          {isPwFocused &&
            (pwValidty ? (
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
            onChange={checkPwMatch}
            onFocus={() => {
              setisSecondPwFocused(true);
            }}
            onBlur={() => {
              setisSecondPwFocused(false);
            }}
          />
          {isSecondPwFocused &&
            secondPw &&
            (pwMatch ? (
              <PwMessage color="blue">비밀번호가 일치합니다.</PwMessage>
            ) : (
              <PwMessage color="red">비밀번호가 일치하지 않습니다.</PwMessage>
            ))}
        </InforEach>

        <InforEach>
          <Label>성별 ( 선택 )</Label>
          <RadioEach>
            <span>여성</span>
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={(e) => {
                setGender(e.target.value);
              }}
            />
          </RadioEach>
          <RadioEach>
            <span>남성</span>
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={(e) => {
                setGender(e.target.value);
              }}
            />
          </RadioEach>
        </InforEach>
        <SubmitButton btnType="submit" type="submit" onClick={handleComplete}>
          완료
        </SubmitButton>
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

const RadioEach = styled.div`
  font-size: 14px;
  display: flex;
  flex-direction: row;
  width: 60px;
  padding-bottom: 5px;
  justify-content: space-between;
`;

const SubmitButton = styled.button`
  width: 322px;
  height: 48px;
  font-size: 16px;
  border: none;
  border-radius: 6px;
  margin: 0 8px;
  background: #23314a;
  border: none;
  color: white;
`;
