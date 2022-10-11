import React from 'react';
import styled from 'styled-components';

function Button(props) {
  return (
    <>
      <NormalBtn>{props.children}</NormalBtn>
    </>
  );
}

const NormalBtn = styled.button`
  color: #23314a;
  border: 1px solid #23314a;
  width: 282px;
  height: 56px;
  font-size: 20px;
  background-color: #ffffff;
  margin: 24px;
  &:hover {
    background-color: #23314a;
    border: 1px solid #23314a;
    color: #ffffff;
  }
`;
export default Button;
