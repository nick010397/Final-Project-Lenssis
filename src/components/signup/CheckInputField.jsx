import React, { useState } from 'react';
import styled from 'styled-components';
import { InforEach } from './SingupForm';
import { useCheckValidity } from '../../api/signupApi';
import { useDispatch } from 'react-redux';
import { setInfor } from '../../store/signupInfor';

const EMAIL_REG = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

export default function CheckInputField({ title, name }) {
  const [value, setValue] = useState('');
  const { data, refetch } = useCheckValidity(name, value);
  const dispatch = useDispatch();
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
          console.log(value);
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
          //네트워크 통신으로 데이터가 넘어왔는데 왜 브라우저는 에러를 내보내지?
          //data 가 undefined라고 하네?...음 두번째 click부터는 제대로 동작하긴 함..
          //요청이 한 클릭씩늦네.
          await refetch();
          console.log(data.data.data.exists);
          if (data.data.data.exists) {
            alert(`이미 존재하는 ${title}입니다.`);
          } else {
            dispatch(setInfor({ name, value }));
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
