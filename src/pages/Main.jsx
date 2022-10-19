import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import NavBar from '../components/common/NavBar';
import SlideMove from '../components/main/SlideMove';
import CategoryBtn from '../components/main/CategoryBtn';
import LensItem from '../components/itemList/LensItem';
import Event from '../components/main/Event';
import notice from '../static/img/notice.png';
import stroke from '../static/img/Vector.png';
import Footer from '../components/common/Footer';
import TitleName from '../components/main/TitleName';
import FilterMenu from '../components/main/FilterMenu';
import axios from 'axios';
function Main({ products, setProducts }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          'http://13.125.213.209/api/v1/product'
        );
        setProducts(response.data.data);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    getProducts();
  }, [setProducts]);

  if (loading) {
    return <div>대기 중...</div>;
  }
  if (!products) {
    return null;
  }
  return (
    <>
      <NavBar />
      {/* 슬라이드 수정 예정 */}
      <CenterDiv slide>
        <SlideMove />
      </CenterDiv>

      <TitleName title="ALL LENS" subtitle="カラコン" />

      <div>
        <Center>
          <CategoryBtn category>ALL</CategoryBtn>
          <CategoryBtn category>1DAY</CategoryBtn>
          <CategoryBtn category>1MONTH</CategoryBtn>
        </Center>
      </div>
      <FilterMenu />
      <MenuHr />
      <div>
        <LensItem products={products} setProducts={setProducts} />
      </div>
      <CategoryBtn more>もっと見る</CategoryBtn>
      <TitleName title="PICKUP ITEM" subtitle="スタッフおすすめ" />
      <div>
        <LensItem />
      </div>
      <CategoryBtn more>もっと見る</CategoryBtn>
      <TitleName title="NEW ARRIVAL" subtitle="新商品" />
      <div>
        <LensItem />
        <LensItem />
      </div>
      <CategoryBtn more>もっと見る</CategoryBtn>
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
      <CategoryBtn end>もっと見る</CategoryBtn>
      <Footer />
    </>
  );
}

const Center = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
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
