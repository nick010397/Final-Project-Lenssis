import React from 'react';
import styled from 'styled-components';
import Star from '../../static/img/Star.png';

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
  justify: flex;
  flex-direction: row;
  justify-content: space-between;
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
