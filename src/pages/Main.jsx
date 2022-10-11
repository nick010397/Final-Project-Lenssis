import React from 'react';
import styled from 'styled-components';
import NavBar from '../components/common/NavBar';
import SlideMove from '../components/main/SlideMove';
import Button from '../components/main/Button';
import LensItem from '../components/itemList/LensItem';
import Event from '../components/main/Event';
import notice from '../static/img/notice.png';
import stroke from '../static/img/Vector.png';
import Footer from '../components/common/Footer';

function Main() {
  return (
    <>
      <NavBar />
      <div id="slide">
        <SlideMove />
      </div>
      <div id="category1">
        <H1Tag>ALL LENS</H1Tag>
        <H2Tag>カラコン</H2Tag>
      </div>
      <Button>ALL</Button>
      <Button>1DAY</Button>
      <Button>1MONTH</Button>
      <div id="a_cate">
        <div>
          <MenuATag href="http://localhost:3000">人気順</MenuATag>
        </div>
        <div>
          <MenuATag href="http://localhost:3000">新着順</MenuATag>
        </div>
        <div>
          <MenuATag href="http://localhost:3000">価格が低い順</MenuATag>
        </div>
        <div>
          <MenuATag href="http://localhost:3000">価格が高い順</MenuATag>
        </div>
        <div>
          <MenuATag href="http://localhost:3000">レビュー件数順</MenuATag>
        </div>
        <div>
          <LensItem />
          <LensItem />
          <LensItem />
        </div>
      </div>
      <Button>もっと見る</Button>
      <div id="category2">
        <H1Tag>PICKUP ITEM</H1Tag>
        <H2Tag>スタッフおすすめ</H2Tag>
      </div>
      <div>
        <LensItem />
      </div>
      <Button>もっと見る</Button>
      <div id="category3">
        <H1Tag>NEW ARRIVAL</H1Tag>
        <H2Tag>新商品</H2Tag>
        <div>
          <LensItem />
          <LensItem />
        </div>
      </div>
      <Button>もっと見る</Button>
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
      <div>
        <p>2022.09.29</p>
        <ATag href="/notice">☆生産中止予定商品7種復活のお知らせ☆ </ATag>
        <ADateTag href="/notice">
          <img link="/notice" src={stroke} alt="이동하기" />
        </ADateTag>
      </div>
      <div>
        <p>2022.09.29</p>
        <ATag href="/notice">☆生産中止予定商品7種復活のお知らせ☆ </ATag>
        <ADateTag href="/notice">
          <img link="/notice" src={stroke} alt="이동하기" />
        </ADateTag>
      </div>
      <Button>もっと見る</Button>
      <Footer />
    </>
  );
}

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

const MenuATag = styled.a`
  font-family: 'Noto Sans JP';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: -0.016em;
  color: #23314a;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export default Main;
