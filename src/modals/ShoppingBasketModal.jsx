import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function ShoppingBasketModal({ open, onClose }) {
  if (!open) return null;
  return (
    <Overlay>
      <Container>
        <Content>
          <p>상품을 장바구니에 추가하셨습니다♥</p>
          <div>
            <button onClick={onClose}>계속 쇼핑하기</button>
          </div>
          <div>
            <Link to={'/shoppingbasket/'}>
              <button>장바구니 보러가기</button>
            </Link>
          </div>
        </Content>
      </Container>
    </Overlay>
  );
}

export default ShoppingBasketModal;

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  position: fixed;
  width: 100%;
  height: 100%;
`;
const Container = styled.div`
  max-width: 600px;
  width: 100%;
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  background-color: #ffffff;
  box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.75);
`;
const Content = styled.div`
  display: inline-block;
`;
