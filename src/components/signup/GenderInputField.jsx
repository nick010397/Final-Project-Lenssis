import React from 'react';
import { InforEach, Label } from './SingupForm';
import styled from 'styled-components';

const GENER_LIST = ['Male', 'Female'];

export default function GenderInputField({ setGenderInfor }) {
  return (
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
              setGenderInfor('gender', e.target.value.slice(0, 1));
            }}
          />
        </RadioEach>
      ))}
    </InforEach>
  );
}

const RadioEach = styled.label`
  font-size: 14px;
  display: flex;
  flex-direction: row;
  width: 60px;
  padding-bottom: 5px;
  justify-content: space-between;
`;
