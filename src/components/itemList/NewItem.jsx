import React from 'react';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';
export default function NewItem({ products }) {
  return (
    <Items>
      {products
        .filter((data) => data.sellPrice <= 990)
        .map((data) => (
          <div key={data.id}>
            <IMG src={data.image1} alt="이미지" />
            <Title>{data.name}</Title>
            <Price>{data.sellPrice}</Price>
          </div>
        ))}
    </Items>
  );
}

const Items = styled.div`
  margin: 0 8vw 16px 8vw;
  display: grid;
  grid-template-columns: repeat(5, 220px);
  grid-gap: 25px;
  justify-items: center;
`;

const IMG = styled.img`
  weight: 220px;
  height: 220px;
  margin: 0;
`;

const Title = styled.p`
  font-family: 'Noto Sans JP';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.016em;
  color: #23314a;
  margin-bottom: 8px;
`;

const Price = styled.p`
  font-family: 'Noto Sans JP';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: -0.016em;
  color: #23314a;
  margin-top: 8px;
  margin-bottom: 16px;
`;
