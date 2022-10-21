import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function LensItem({ products }) {
  return (
    <Items>
      {products &&
        products.map((product) => (
          <div key={`key-${product.id}`}>
            <Link
              to={`/itemdetail/${product.id}`}
              products={products}
              style={{ textDecoration: 'none' }}
            >
              <IMG src={product.image1} alt="렌즈이미지" />
              <Title>{product.name}</Title>
              <Price>{product.sellPrice}</Price>
            </Link>
          </div>
        ))}
    </Items>
  );
}

const Items = styled.div`
  margin: 0 8vw 16px 8vw;
  display: grid;
  grid-template-columns: repeat(5, 220px);
  justify-content: space-between;
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
