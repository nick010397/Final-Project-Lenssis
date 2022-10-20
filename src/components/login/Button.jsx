import React from 'react';
import styled from 'styled-components';

export default function Button({ infor, onClick }) {
  return (
    <ConfirmButton type="sibmit" disabled={infor.disabled} onClick={onClick}>
      {infor.text}
    </ConfirmButton>
  );
}

const ConfirmButton = styled.button`
  width: 322px;
  height: 48px;
  font-size: 16px;
  border: none;
  border-radius: 6px;
  margin: 0 8px;
  background: #23314a;
  border: none;
  color: white;
  cursor: pointer;

  &:disabled {
    background-color: rgba(23, 23, 23, 0.25);
  }
`;
