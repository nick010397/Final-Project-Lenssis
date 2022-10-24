import React from 'react';
import styled from 'styled-components';

export default function Button({ text, onClick }) {
  return (
    <ConfirmButton type="sibmit" onClick={onClick}>
      {text}
    </ConfirmButton>
  );
}

const ConfirmButton = styled.button`
  width: 322px;
  height: 48px;
  font-size: 16px;
  border: none;
  border-radius: 6px;
  margin: 40px 8px;
  background: #23314a;
  border: none;
  color: white;
  cursor: pointer;
`;
