import React from 'react';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';

function ShoppingBasketModal({ open, onClose }) {
  if (!open) return null;
  return (
    <Overlay>
      <Container>
        <Content>
          <div>
            <p>장바구니에 추가완료!!</p>
          </div>
          <br />
          <br />
          <Btndiv>
            <div>
              <Confirmbtn onClick={onClose}>확인</Confirmbtn>
            </div>
            &nbsp;&nbsp;
            {/* <div>
              <Link to={'/shoppingbasket/'}>
                <button>장바구니 보러가기</button>
              </Link>
            </div> */}
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
  height: 40%;
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;

  background-color: #ffffff;
  box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.75);
  P {
    font-weight: 700;
    font-size: 18px;
    line-height: 26px;
    text-align: center;

    letter-spacing: -0.016em;

    color: #606060;
  }
`;
const Content = styled.div`
  margin: auto;
`;
const Btndiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
`;
const Confirmbtn = styled.button`
  width: 334px;
  height: 48px;
  left: 38px;
  bottom: 30px;
  color: white;

  background: #23314a;
  border-radius: 6px;
`;
