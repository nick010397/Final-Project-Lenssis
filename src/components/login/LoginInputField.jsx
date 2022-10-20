import React, { useState } from 'react';
import styled from 'styled-components';
import deleteIcon from '../../static/img/VectordeleteIcon.png';

export default function LoginInputField({ name, setLoginInfor }) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div>
      <InputField
        type={name === 'loginId' ? 'text' : 'password'}
        onChange={(e) => {
          setLoginInfor((infor) => ({ ...infor, [name]: e.target.value }));
        }}
        onFocus={() => {
          setIsFocused(true);
        }}
        onBlur={() => {
          setIsFocused(false);
        }}
      />
      <DeleteBtn
        style={{
          display: isFocused ? 'inline' : 'none',
          transform: name === 'password' ? 'translate(-50px, 15px)' : '',
        }}
      />
    </div>
  );
}

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
