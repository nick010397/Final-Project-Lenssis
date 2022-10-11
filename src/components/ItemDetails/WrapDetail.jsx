import React from 'react';
import styled from 'styled-components';

function WrapDetail() {
  return (
    <Container>
      <h1>에일링 에일</h1>
      <Upbtn value="인기상품">인기</Upbtn> &nbsp;
      <BestBtn value="인기상품">추천</BestBtn>
      <p>가격 1,800엔</p>
      <hr />
      <br />
      <span>
        사용일 : &nbsp;&nbsp; <strong>1year</strong>
      </span>
      <br />
      <br />
      <span>
        지름 : &nbsp;&nbsp; <strong>18.77mm</strong>
      </span>
      <br />
      <br />
      <hr />
      <span>
        색상&nbsp;&nbsp;
        <select value="선택하세요">
          <option>선택하세요</option>
          <option>0.5</option>
          <option>0.6</option>
          <option>0.7</option>
        </select>
      </span>
      <br />
      <br />
      <span>
        빈도&nbsp;&nbsp;
        <select value="선택하세요">
          <option>선택하세요</option>
          <option>0.5</option>
          <option>0.6</option>
          <option>0.7</option>
        </select>
      </span>
      <br />
      <br />
      <span>
        그래픽지름&nbsp;&nbsp;
        <select value="선택하세요">
          <option>선택하세요</option>
          <option>0.5</option>
          <option>0.6</option>
          <option>0.7</option>
        </select>
      </span>
      <br />
      <br />
      <span>
        사용기간&nbsp;&nbsp;
        <select value="선택하세요">
          <option>선택하세요</option>
          <option>0.5</option>
          <option>0.6</option>
          <option>0.7</option>
        </select>
      </span>
      <br />
      <Input value="총금액"></Input>
      <br />
      <br />
      <Orderbtn>주문하기</Orderbtn>&nbsp;&nbsp;
      <Keepbtn>장바구니</Keepbtn>&nbsp;&nbsp;
      <Keepbtn>좋아요♡</Keepbtn>
    </Container>
  );
}

export default WrapDetail;

const Container = styled.div`
  width: 50%;
  height: auto;
  min-height: 1000px;
  float: right;
  position: relative;
`;
const Upbtn = styled.button`
  width: 59px;
  height: 24px;
  font-family: 'Pretendard';
  font-style: normal;
  text-align: center;
  letter-spacing: -0.016em;

  color: white;
  background-color: skyblue;
`;
const BestBtn = styled(Upbtn)`
  background-color: green;
`;

const Input = styled.input`
  box-sizing: border-box;

  width: 557px;
  height: 78px;
  left: -0.04px;
  margin-top: 50px;

  background: #f9f9f9;
  border: 0.4px solid #c5c5c5;
  border-radius: 4px;
`;

const Orderbtn = styled.button`
  width: 150px;
  height: 60px;
  left: 0px;
  top: 0px;
  color: white;

  background: #eb5072;
  border-radius: 4px;
`;
const Keepbtn = styled(Orderbtn)`
  background-color: black;
`;
