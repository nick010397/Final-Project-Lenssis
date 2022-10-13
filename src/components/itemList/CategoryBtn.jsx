import React from 'react';
import styled from 'styled-components';

export default function CategoryBtn() {
  return (
    <div>
      <BtnDiv>
        <NormalBtn>ALL</NormalBtn>
        <NormalBtn>1DAY</NormalBtn>
        <NormalBtn>1MONTH</NormalBtn>
      </BtnDiv>
    </div>
  );
}

const BtnDiv = styled.div`
  margin: 20px 0px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const NormalBtn = styled.button`
  color: #23314a;
  border: 1px solid #23314a;
  width: 282px;
  height: 56px;
  font-size: 20px;
  background-color: #ffffff;
  margin: 24px;
`;
