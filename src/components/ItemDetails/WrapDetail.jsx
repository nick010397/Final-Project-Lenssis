import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import ShoppingBasketModal from '../../modals/ShoppingBasketModal';

function WrapDetail({ product, handleClick }) {
  const [openModal, setOpenModal] = useState(false);
  const [useDate, setuseDate] = useState();

  window.localStorage.setItem('CartItem', useDate);
  console.log(useDate);
  return (
    <Container>
      <form>
        <p className="p1">{product.nameKor}</p>
        <br />
        <Suggestionbtn type="button">추천</Suggestionbtn> &nbsp;
        <Bestbtn type="button">인기</Bestbtn>
        <br />
        <br />
        <span className="price">가격</span>&nbsp;&nbsp;{' '}
        <span className="円">{product.sellPrice.toLocaleString()}円</span>
        <hr />
        <br />
        <Commonspan>사용일 </Commonspan> &nbsp;&nbsp; <strong>1year</strong>
        <br />
        <br />
        <Commonspan>지름 </Commonspan> &nbsp;&nbsp; <strong>18.77mm</strong>
        <br />
        <br />
        <hr />
        <br />
        <div>
          {/* <img src={Vector1} alt="Vector1" />
          <Vector2img src={Vector2} alt="Vector2"></Vector2img> */}
          <Commonspan>그래픽 지름&nbsp;&nbsp;&nbsp;</Commonspan>
          <Graphicdiameterbtn type="button">
            {product.spec.graphicDiameter}
          </Graphicdiameterbtn>
        </div>
        <br />
        <div>
          <Commonspan>
            사용 기간&nbsp;&nbsp;&nbsp;
            <Graphicdiameterbtn
              type="button"
              onClick={(e) => setuseDate(e.target.innerText)}
            >
              {product.spec.duration}
            </Graphicdiameterbtn>
          </Commonspan>
        </div>
        <br />
        <div>
          <Commonspan>
            색상&nbsp;&nbsp;&nbsp;
            <Brownbtn type="button">브라운</Brownbtn>
            <Bluebtn type="button">블루</Bluebtn>
            <Chocobtn type="button">초코</Chocobtn>
            <Graybtn type="button">그레이</Graybtn>
          </Commonspan>
        </div>
        <br />
        <div>
          <Commonspan>
            빈도&nbsp;&nbsp;
            {product.spec.frequency.split(',')}
          </Commonspan>
        </div>
        <ResultPrice>
          <span>총 금액</span>¥{product.sellPrice.toLocaleString()}
        </ResultPrice>
        <br />
        <br />
        <Orderbtn type="button">주문하기</Orderbtn>&nbsp;&nbsp;
        <Keepbtn type="button" onClick={() => setOpenModal(true)}>
          장바구니
        </Keepbtn>
        <ShoppingBasketModal
          open={openModal}
          onClose={() => setOpenModal(false)}
        />
        &nbsp;&nbsp;
        <Keepbtn type="button" onClick={handleClick}>
          좋아요♡
        </Keepbtn>
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
  font-style: normal;
  .p1 {
    font-weight: 400; 'Noto Sans JP';
    font-size: 30px;
    line-height: 48px;
    letter-spacing: -0.016em;

  }
.price {
    color: red;
    font-weight: 300;
    font-size: 24px;
    line-height: 38px;
    letter-spacing: -0.016em;
  }
  .円{
    font-weight: 400;
    font-size: 30px;
    line-height: 38px;
    letter-spacing: -0.016em;
    color: #171717;
  }
  `;
const Commonspan = styled.span`
  font-weight: 500;
  font-size: 20px;
  line-height: 32px;

  text-align: center;
  letter-spacing: -0.016em;

  color: #767676;
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
const Vector2img = styled.img`
  position: absolute;
  margin: 10px, 10px, 10px, 10px;
`;
const Graphicdiameterbtn = styled.button`
  box-sizing: border-box;
  width: 86px;
  height: 42px;
  background: #ffffff;
  border: 1px solid #d3d6db;
  border-radius: 4px;
  cursor: pointer;
  type='button' 
  opacity: 1;
  transition: 0.3s;
  :hover {opacity: 0.5}
`;

const ResultPrice = styled.div`
  display: border-box;
  border: 1px solid black;

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
  transition: 0.3s;
  :hover {
    opacity: 0.5;
  }
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
  transition: 0.3s;
  :hover {
    opacity: 0.5;
  }
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
