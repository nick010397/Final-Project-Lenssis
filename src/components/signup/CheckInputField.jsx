import React, { useState } from 'react';
import styled from 'styled-components';
import { InforEach } from './SingupForm';
import { useCheckValidity } from '../../api/signupApi';

const EMAIL_REG = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

export default function CheckInputField({ title, name, setUserInfor }) {
  const [value, setValue] = useState('');
  const { refetch } = useCheckValidity(name, value);
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
          if (name === 'email') {
            if (!EMAIL_REG.test(value)) {
              alert('유효하지 않는 형식의 이메일입니다');
              return;
            }
          } else if (name === 'loginId') {
            if (value.length < 8) {
              alert('아이디는 최소 8글자여야 합니다.');
              return;
            }
          }

          const data = await refetch();
          console.log(data.data.data.data.exists);
          if (data.data.data.data.exists) {
            alert(`이미 존재하는 ${title}입니다.`);
          } else {
            alert(`사용 가능한 ${title}입니다`);
            setUserInfor(name, value);
          }
        }}
      >
        중복 확인
      </RepetitionCheckBtn>
    </InforEach>
  );
}

const Label = styled.div`
  font-size: 14px;
  color: #606060;
  padding-bottom: 15px;
`;

const InputField = styled.input.attrs({ requried: true })`
  border: none;
  border-bottom: 2px solid #f0f0f0;
  width: '238px';
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
