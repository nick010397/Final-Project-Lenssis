import React from 'react';
import Event from '../components/main/Event';
import SlideMove from '../components/main/SlideMove';
import notice from '../static/img/notice.png';
import stroke from '../static/img/Vector.png';
import styled from 'styled-components';

// const ChoiceBtn = styled.button`
//   background-color: #23314a;
//   border: 1px solid #23314a;
//   width: 282px;
//   height: 56px;
//   font-size: 20px;
//   color: #ffffff;
//   margin: 24px;
// text-align: center;
// `;

const NormalBtn = styled.button`
  color: #23314a;
  border: 1px solid #23314a;
  width: 282px;
  height: 56px;
  font-size: 20px;
  background-color: #ffffff;
  margin: 24px;
`;

const H1Tag = styled.h1`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 900;
  font-size: 44px;
  line-height: 60px;
  text-align: center;
  letter-spacing: -0.016em;
  color: #23314a;
`;

const H2Tag = styled.h2`
  font-family: 'Noto Sans JP';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  letter-spacing: -0.016em;
  color: #23314a;
`;

const ATag = styled.a`
  font-family: 'Noto Sans JP';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: -0.016em;
  color: #23314a;
`;

const ADateTag = styled.a`
  font-family: 'Noto Sans JP';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: -0.016em;
  color: #656f80;
`;
function Main() {
  return (
    <>
      <div id="slide">
        <SlideMove />
      </div>
      <div id="category1">
        <H1Tag>ALL LENS</H1Tag>
        <H2Tag>カラコン</H2Tag>
      </div>
      <NormalBtn>ALL</NormalBtn>
      <NormalBtn>1DAY</NormalBtn>
      <NormalBtn>1MONTH</NormalBtn>
      <div id="a_cate">
        <>
          <ul>
            <li>
              <a href="http://localhost:3000">人気順</a>
            </li>
            <li>
              <a href="http://localhost:3000">新着順</a>
            </li>
            <li>
              <a href="http://localhost:3000">価格が低い順</a>
            </li>
            <li>
              <a href="http://localhost:3000">価格が高い順</a>
            </li>
            <li>
              <a href="http://localhost:3000">レビュー件数順</a>
            </li>
          </ul>
        </>
      </div>
      <NormalBtn>もっと見る</NormalBtn>
      <div id="category2">
        <H1Tag>PICKUP ITEM</H1Tag>
        <H2Tag>スタッフおすすめ</H2Tag>
      </div>
      <NormalBtn>もっと見る</NormalBtn>
      <div id="category3">
        <H1Tag>NEW ARRIVAL</H1Tag>
        <H2Tag>新商品</H2Tag>
      </div>
      <NormalBtn>もっと見る</NormalBtn>
      <Event />

      <div>
        <H1Tag>NOTICE</H1Tag>
        <H2Tag>お知らせ</H2Tag>
        <img src={notice} alt="공지" />
      </div>
      <div>
        <p>2022.09.29</p>
        <ATag href="/notice">☆生産中止予定商品7種復活のお知らせ☆ </ATag>
        <ADateTag href="/notice">
          <img link="/notice" src={stroke} alt="이동하기" />
        </ADateTag>
      </div>

      <NormalBtn>もっと見る</NormalBtn>
    </>
  );
}

export default Main;
