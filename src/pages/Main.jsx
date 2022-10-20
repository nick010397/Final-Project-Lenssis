import React from 'react';
import styled, { css } from 'styled-components';
import NavBar from '../components/common/NavBar';
import SlideMove from '../components/main/SlideMove';
import Button from '../components/main/Button';
import LensItem from '../components/itemList/LensItem';
import Event from '../components/main/Event';
import notice from '../static/img/notice.png';
import stroke from '../static/img/Vector.png';
import Footer from '../components/common/Footer';
import TitleName from '../components/main/TitleName';

function Main() {
  return (
    <>
      <NavBar />
      <Center>
        <a href="/login">LOGIN </a>
        <a href="/signup">SIGNUP </a>
        <a href="/itemdetail">ITEMDETAIL </a>
        <a href="/itemlist">ITEMLIST </a>
      </Center>

      {/* 슬라이드 수정 예정 */}
      <CenterDiv slide>
        <SlideMove />
      </CenterDiv>

      <TitleName title="ALL LENS" subtitle="カラコン" />

      <div>
        <Center>
          <Button category>ALL</Button>
          <Button category>1DAY</Button>
          <Button category>1MONTH</Button>
        </Center>
      </div>
      <CenterDiv>
        <CategroyDiv>
          <MenuATag href="http://localhost:3000">人気順</MenuATag>
        </CategroyDiv>
        <CategroyDiv>
          <MenuATag href="http://localhost:3000">新着順</MenuATag>
        </CategroyDiv>
        <CategroyDiv>
          <MenuATag href="http://localhost:3000">価格が低い順</MenuATag>
        </CategroyDiv>
        <CategroyDiv>
          <MenuATag href="http://localhost:3000">価格が高い順</MenuATag>
        </CategroyDiv>
        <CategroyDiv>
          <MenuATag href="http://localhost:3000">レビュー件数順</MenuATag>
        </CategroyDiv>
      </CenterDiv>
      <MenuHr />
      <div>
        <LensItem />
        <LensItem />
        <LensItem />
      </div>
      <Button more>もっと見る</Button>
      <TitleName title="PICKUP ITEM" subtitle="スタッフおすすめ" />
      <div>
        <LensItem />
      </div>
      <Button more>もっと見る</Button>
      <TitleName title="NEW ARRIVAL" subtitle="新商品" />
      <div>
        <LensItem />
        <LensItem />
      </div>
      <Button more>もっと見る</Button>
      <Event />
      <TitleName title="NOTICE" subtitle="お知らせ" />
      <NoticImg>
        <img src={notice} alt="공지" />
      </NoticImg>
      <div>
        <NoticeDiv>
          <P>2022.09.29</P>
          <NoticeATag href="/notice">
            ☆生産中止予定商品7種復活のお知らせ☆{' '}
          </NoticeATag>
          <NoticeVectorTag href="/notice">
            <img link="/notice" src={stroke} alt="이동하기" />
          </NoticeVectorTag>
          <Hr />
        </NoticeDiv>
      </div>
      <div>
        <NoticeDiv>
          <P>2022.09.29</P>
          <NoticeATag href="/notice">
            ☆生産中止予定商品7種復活のお知らせ☆{' '}
          </NoticeATag>
          <NoticeVectorTag href="/notice">
            <img link="/notice" src={stroke} alt="이동하기" />
          </NoticeVectorTag>
          <Hr />
        </NoticeDiv>
      </div>
      <div>
        <NoticeDiv>
          <P>2022.09.29</P>
          <NoticeATag href="/notice">
            ☆生産中止予定商品7種復活のお知らせ☆{' '}
          </NoticeATag>
          <NoticeVectorTag href="/notice">
            <img link="/notice" src={stroke} alt="이동하기" />
          </NoticeVectorTag>
          <Hr />
        </NoticeDiv>
      </div>
      <Button end>もっと見る</Button>
      <Footer />
    </>
  );
}

const Center = styled.div`
  text-align: center;
`;

const CenterDiv = styled.div`
  display: flex;
  margin-left: 8vw;
  margin-right: 8vw;
  margin-top: 80px;

  // 슬라이드 수정 예정
  ${(props) =>
    props.slide &&
    css`
      margin-left: 0;
      margin-top: 0;
      justify-content: center;
      margin-bottom: 138px;
      border-bottom: 0;
    `}
`;

const MenuHr = styled.hr`
  margin-top: -4px;
  // width:1275px;
  margin-right: 8vw;
  margin-left: 8vw;
  border: 0px;
  border-bottom: 4px solid #656f80;
`;
const MenuATag = styled.a`
  font-family: 'Noto Sans JP';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: -0.016em;
  color: #656f80;
  text-decoration: none;
`;

const CategroyDiv = styled.div`
  text-align: center;
  padding-right: 22px;
  padding-left: 22px;
  padding-bottom: 10px;
  &:hover {
    ${MenuATag} {
      color: #23314a;
    }
    border-bottom: 4px solid #23314a;
  }
`;

const NoticImg = styled.div`
  text-align: center;
  margin-bottom: 53px;
`;

const NoticeDiv = styled.div`
  width: 1200px;
  display: block;
  margin: auto;
`;
const P = styled.p`
  margin-bottom: 12px;
`;

const NoticeATag = styled.a`
  font-family: 'Noto Sans JP';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: -0.016em;
  color: #23314a;
`;

//vector 위치 수정(미묘하게 다름)
const NoticeVectorTag = styled.a`
  margin-left: 833.5px;
`;

const Hr = styled.hr`
  width: 1200px;
  height: 1px;
  background: #d3d6db;
  text-align: center;
  border: 0;
  margin-top: 30px;
  margin-bottom: 29px;
`;

export default Main;
