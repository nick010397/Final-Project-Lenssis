import React from 'react';
import styled from 'styled-components';
import Star from '../../static/img/Star.png';
import { Link } from 'react-router-dom';

function PickupItem(product) {
  return (
    <Itemdiv key={`key-${product.id}`}>
      <StyledLink to={`/itemdetail/${product.id}`}>
        <IMG src={product.image1} alt="렌즈이미지" />
        <Title>{product.name}</Title>
        <Price>{product.sellPrice.toLocaleString()}円</Price>
        <StyledStars>
          <div>
            <img src={Star} alt="별점" />
            <img src={Star} alt="별점" />
            <img src={Star} alt="별점" />
            <img src={Star} alt="별점" />
            <img src={Star} alt="별점" />
          </div>
          <StyledReviewDiv>(180)</StyledReviewDiv>
        </StyledStars>
      </StyledLink>
      <StyledStars>
        <StyledTagDiv>おすすめ</StyledTagDiv>
        <StyledTagDiv>おすすめ</StyledTagDiv>
      </StyledStars>
    </Itemdiv>
  );
}

const StyledLink = styled(Link)`
  text-decoration: none;
`;
const IMG = styled.img`
  weight: 282px;
  height: 282px;
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

const StyledStars = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-start;
  margin-bottom: 13.5px;
`;

const StyledReviewDiv = styled.div`
  width: 28px;
  height: 18px;
  font-family: 'Noto Sans JP';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: -0.016em;
  color: #656f80;
`;

const StyledTagDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  display: flex;
  gap: 10px;
  width: 64px;
  height: 28px;
  background: #e69cc4;
  font-family: 'Noto Sans JP';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 28px;
  letter-spacing: -0.016em;
  justify-content: center;
  margin-left: 4px;
`;

const Itemdiv = styled.div`
  height: 330px;
  margin: 40px 0px;
`;
export default PickupItem;
