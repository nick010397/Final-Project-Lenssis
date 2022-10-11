import React from 'react';
import styled from 'styled-components';

export default function Title({ message }) {
  return (
    <TitleBox>
      <SmallTitle>{message.small}</SmallTitle>
      <BigTitle>{message.big}</BigTitle>
    </TitleBox>
  );
}

const TitleBox = styled.div`
  margin-bottom: 46px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const SmallTitle = styled.div`
  font-size: 16px;
  margin-bottom: 8px;
`;

const BigTitle = styled.div`
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -0.016em;
  line-height: 26px;
  color: #171717;
`;
