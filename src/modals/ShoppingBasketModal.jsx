import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function ShoppingBasketModal({ open, onClose }) {
  if (!open) return null;
  return (
    <Overlay>
      <Container>
        <Content>
          <div>
            <p>상품을 장바구니에 추가하셨습니다♥</p>
          </div>
          <br />
          <Btndiv>
            <div>
              <button onClick={onClose}>계속 쇼핑하기</button>
            </div>
            &nbsp;&nbsp;
            <div>
              <Link to={'/shoppingbasket/'}>
                <button>장바구니 보러가기</button>
              </Link>
            </div>
          </Btndiv>
        </Content>
      </Container>
    </Overlay>
  );
}

export default ShoppingBasketModal;

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  position: fixed;
  width: 100vw;
  height: 100vh;
`;
const Container = styled.div`
  max-width: 1000px;
  width: 30%;
  height: 20%;
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;

  background-color: #ffffff;
  box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.75);
`;
const Content = styled.div`
  margin: auto;
`;
const Btndiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
`;
