import React from 'react';
import styled, { css } from 'styled-components';

function Button(props) {
  return (
    <>
      <NormalBtn {...props}>{props.children}</NormalBtn>
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
  &:hover {
    background-color: #23314a;
    border: 1px solid #23314a;
    color: #ffffff;
  }

  ${(props) =>
    props.category &&
    css`
      margin-right: 24px;
    `}

  ${(props) =>
    !props.category &&
    css`
      display: block;
      margin: auto;
    `}
`;
export default Button;
