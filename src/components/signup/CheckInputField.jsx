import React, { useState } from 'react';
import styled from 'styled-components';
import { InforEach, Label, InputField } from './SingupForm';
import { useCheckValidity } from '../../api/signupApi';
import { EMAIL_REG } from '../../utils/reg';

export default function CheckInputField({ title, name, setUserInfor }) {
  const [value, setValue] = useState('');
  const { refetch } = useCheckValidity(name, value);

  const checkEmailValidity = () => {
    if (!EMAIL_REG.test(value)) {
      alert('유효하지 않는 형식의 이메일입니다');
      return false;
    } else {
      return true;
    }
  };

  const checkIdValidity = () => {
    setUserInfor(`${name}`, value);
    if (value.length < 8) {
      alert('아이디는 최소 8글자여야 합니다.');
      return false;
    } else {
      return true;
    }
  };

  const setInfor = async () => {
    const data = await refetch();

    if (data.data.data.data.exists) {
      alert(`이미 존재하는 ${title}입니다.`);
      setUserInfor(`is${name}Unique`, false);
    } else {
      alert(`사용 가능한 ${title}입니다`);
      setUserInfor(`is${name}Unique`, true);
    }
    setUserInfor(name, value);
  };

  return (
    <InforEach>
      <Label>{title}</Label>
      <InputField
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <RepetitionCheckBtn
        onClick={async (e) => {
          e.preventDefault();
          let result = false;
          if (name === 'email') {
            result = checkEmailValidity();
          } else if (name === 'loginId') {
            result = checkIdValidity();
          }
          if (result) {
            await setInfor();
          }
        }}
      >
        중복 확인
      </RepetitionCheckBtn>
    </InforEach>
  );
}
const RepetitionCheckBtn = styled.button`
  position: absolute;
  transform: translate(260px, 10px);
  width: 72px;
  height: 48px;
  background-color: white;
  border: 1px solid #dedede;
  cursor: pointer;
`;
