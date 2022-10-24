import React from 'react';
import styled, { css } from 'styled-components';

function TitleName(props) {
  return (
    <div>
      <Title {...props}>{props.title}</Title>
      <SubTitle {...props}>{props.subtitle}</SubTitle>
    </div>
  );
}
const Title = styled.h1`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 900;
  font-size: 44px;
  line-height: 60px;
  text-align: center;
  letter-spacing: -0.016em;
  color: #23314a;
  margin-bottom: 8px;
  margin-top: 138px;
  ${(props) =>
    props.event &&
    css`
      margin-top: 100px;
      margin-bottom: 8px;
    `}
`;

const SubTitle = styled.h2`
  font-family: 'Noto Sans JP';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  letter-spacing: -0.016em;
  color: #23314a;
  margin-bottom: 80px;
`;
export default TitleName;
