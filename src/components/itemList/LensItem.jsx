import { React, useEffect, useState } from 'react';
import styled from 'styled-components';
import Star from '../../static/img/Star.png';

export default function LensItem() {
  return (
    <>
      <StyledLensItems>
        <StyledLensItem>
          <StyledLensImg
            src="https://lenssis.jp/data/item/0001616006/7Iqk7YWU652867iM65287Jq0_1month_7IOB7IS4.jpg"
            alt="렌즈 사진"
          />
          <StyledLensInfo>
            <StyledLensName>제품명제품명제품명</StyledLensName>
            <div>1,200 가격</div>
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
            <StyledTagDiv>おすすめ</StyledTagDiv>
          </StyledLensInfo>
        </StyledLensItem>

        <StyledLensItem>
          <StyledLensImg
            src="https://lenssis.jp/data/item/0001616006/7Iqk7YWU652867iM65287Jq0_1month_7IOB7IS4.jpg"
            alt="렌즈 사진"
          />
          <StyledLensInfo>
            <StyledLensName>제품명제품명제품명</StyledLensName>
            <div>1,200 가격</div>
            <StyledStars>
              <img src={Star} alt="별점" />
              <img src={Star} alt="별점" />
              <img src={Star} alt="별점" />
              <img src={Star} alt="별점" />
              <img src={Star} alt="별점" />
            </StyledStars>
          </StyledLensInfo>
        </StyledLensItem>

        <StyledLensItem>
          <StyledLensImg
            src="https://lenssis.jp/data/item/0001616006/7Iqk7YWU652867iM65287Jq0_1month_7IOB7IS4.jpg"
            alt="렌즈 사진"
          />
          <StyledLensInfo>
            <StyledLensName>제품명제품명제품명</StyledLensName>
            <div>1,200 가격</div>
            <StyledStars>
              <img src={Star} alt="별점" />
              <img src={Star} alt="별점" />
              <img src={Star} alt="별점" />
              <img src={Star} alt="별점" />
              <img src={Star} alt="별점" />
            </StyledStars>
          </StyledLensInfo>
        </StyledLensItem>

        <StyledLensItem>
          <StyledLensImg
            src="https://lenssis.jp/data/item/0001616006/7Iqk7YWU652867iM65287Jq0_1month_7IOB7IS4.jpg"
            alt="렌즈 사진"
          />
          <StyledLensInfo>
            <StyledLensName>제품명제품명제품명</StyledLensName>
            <div>1,200 가격</div>
            <StyledStars>
              <img src={Star} alt="별점" />
              <img src={Star} alt="별점" />
              <img src={Star} alt="별점" />
              <img src={Star} alt="별점" />
              <img src={Star} alt="별점" />
            </StyledStars>
          </StyledLensInfo>
        </StyledLensItem>

        <StyledLensItem>
          <StyledLensImg
            src="https://lenssis.jp/data/item/0001616006/7Iqk7YWU652867iM65287Jq0_1month_7IOB7IS4.jpg"
            alt="렌즈 사진"
          />
          <StyledLensInfo>
            <StyledLensName>제품명제품명제품명</StyledLensName>
            <div>1,200 가격</div>
            <StyledStars>
              <img src={Star} alt="별점" />
              <img src={Star} alt="별점" />
              <img src={Star} alt="별점" />
              <img src={Star} alt="별점" />
              <img src={Star} alt="별점" />
            </StyledStars>
          </StyledLensInfo>
        </StyledLensItem>
      </StyledLensItems>
    </>
  );
}

const StyledLensItems = styled.div`
  margin: 0 8vw 0 8vw;
  display: grid;
  grid-template-columns: 220px 220px 220px 220px 220px;
  justify-content: space-between;
`;

const StyledLensItem = styled.div`
  width: 220px;
  height: 330px;
  margin-top: 30px;
`;

const StyledStars = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-start;
`;

const StyledLensImg = styled.img`
  width: 220px;
  height: 220px;
`;

const StyledLensName = styled.div`
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.15px;
`;

const StyledLensInfo = styled.div``;

const StyledTagDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 4px;
  width: 282px;
  height: 28px;
  flex: none;
  order: 2;
  align-self: stretch;
  flex-grow: 0;
  width: 48px;
  font-family: 'Noto Sans JP';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: -0.016em;
  font-color: #23314a;
  order: 0;
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

const SubTitle = styled.h3`
  font-family: 'Noto Sans JP';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.016em;
  color: #23314a;
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
