import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import ShoppingBasketModal from '../../modals/ShoppingBasketModal';

function WrapDetail({ product }) {
  const [openModal, setOpenModal] = useState(false);
  return (
    <Container>
      <form>
        <p className="p1">{product.nameKor}</p>
        <br />
        <Suggestionbtn>추천</Suggestionbtn> &nbsp;
        <Bestbtn>인기</Bestbtn>
        <br />
        <br />
        <span className="price">가격</span>&nbsp;&nbsp;{' '}
        <span>{product.sellPrice}엔</span>
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
        <br />
        <span>
          그래픽 지름&nbsp;&nbsp;
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
          사용 기간&nbsp;&nbsp;
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
          색상&nbsp;&nbsp;
          <Brownbtn>브라운</Brownbtn>
          <Bluebtn>블루</Bluebtn>
          <Chocobtn>초코</Chocobtn>
          <Graybtn>그레이</Graybtn>
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
        <Input value="총금액"></Input>
        <br />
        <br />
        <Orderbtn>주문하기</Orderbtn>&nbsp;&nbsp;
        <Keepbtn type="button" onClick={() => setOpenModal(true)}>
          장바구니
        </Keepbtn>
        <ShoppingBasketModal
          open={openModal}
          onClose={() => setOpenModal(false)}
        />
        &nbsp;&nbsp;
        <Keepbtn>좋아요♡</Keepbtn>
      </form>
    </Container>
  );
}

export default WrapDetail;

const Container = styled.div`
  width: 40%;
  height: auto;
  float: right;
  font-family: 'Noto Sans JP';
  .p1 {
    font-family: 'Noto Sans JP';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 48px;

    letter-spacing: -0.016em;
  }
  .price {
    color: red;
  }
`;
const Suggestionbtn = styled.button`
  width: 59px;
  height: 24px;
  font-style: normal;
  font-weight: 1500;
  font-size: 15px;
  line-height: 24px;
  text-align: center;
  letter-spacing: -0.016em;

  color: #23314a;
  background-color: rgba(230, 156, 196, 1);
`;
const Bestbtn = styled(Suggestionbtn)`
  background-color: rgba(249, 176, 170, 1);
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
  cursor: pointer;

  background: #eb5072;
  border-radius: 4px;
`;
const Keepbtn = styled(Orderbtn)`
  background-color: black;
`;
const Brownbtn = styled.button`
  width: 86px;
  height: 42px;
  border: 1px solid #d3d6db;
  color: white;
  cursor: pointer;

  background: #483a2e;
  border-radius: 4px;
`;
const Bluebtn = styled(Brownbtn)`
  background-color: #364c75;
`;
const Chocobtn = styled(Brownbtn)`
  background-color: #5f4935;
`;
const Graybtn = styled(Brownbtn)`
  background-color: #797c82;
`;
