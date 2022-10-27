import React from 'react';
import styled from 'styled-components';

export default function Title({ text, subText }) {
  return (
    <TitleBox>
      <SmallTitle>{subText}</SmallTitle>
      <BigTitle>{text}</BigTitle>
    </TitleBox>
  );
}

const TitleBox = styled.div`
  margin: 46px 0;
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
