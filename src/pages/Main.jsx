import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NavBar from '../components/common/NavBar';
import CategoryBtn from '../components/main/CategoryBtn';
import LensItem from '../components/itemList/LensItem';
import Event from '../components/main/Event';
import notice from '../static/img/notice.png';
import stroke from '../static/img/Vector.png';
import Footer from '../components/common/Footer';
import TitleName from '../components/main/TitleName';
import FilterMenu from '../components/main/FilterMenu';
import MainBanner from '../components/main/MainBanner';
import { useGetProducts } from '../api/productApi';
function Main({ products, setProducts }) {
  console.log(useGetProducts());
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   const getProducts = async () => {
  //     setLoading(true);
  //     try {
  //       const response = await axios.get(
  //         'http://13.125.213.209/api/v1/product'
  //       );
  //       setProducts(response.data.data);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //     setLoading(false);
  //   };
  //   getProducts();
  // }, [setProducts]);

  // console.log(products);

  // if (loading) {
  //   return <div>대기 중...</div>;
  // }
  // if (!products) {
  //   return null;
  // }
  return (
    <>
      {/* Navbar */}
      <NavBar />
      {/* 슬라이드 수정 예정 */}
      <CenterDiv>
        <MainBanner />
      </CenterDiv>

      {/* 모든 아이템 */}
      <TitleName title="ALL LENS" subtitle="カラコン" />
      <div>
        <Center>
          <CategoryBtn category>ALL</CategoryBtn>
          <CategoryBtn category>1DAY</CategoryBtn>
          <CategoryBtn category>1MONTH</CategoryBtn>
        </Center>
      </div>
      {/* 메뉴필터 */}
      <FilterMenu />
      <MenuHr />
      {/* 렌즈 아이템 */}
      <div>
        <LensItem products={products} setProducts={setProducts} />
      </div>
      <CategoryBtn more>もっと見る</CategoryBtn>
      {/* 추천 아이템 */}
      <TitleName title="PICKUP ITEM" subtitle="スタッフおすすめ" />

      {/* 임시로 만들어봄 */}
      <Items>
        {products
          .filter((data) => data.sellPrice === 990)
          .map((data) => (
            <div>
              <IMG src={data.image1} alt="이미지" />
              <Title>{data.name}</Title>
              <Price>{data.sellPrice}</Price>
            </div>
          ))}
      </Items>
      <CategoryBtn more>もっと見る</CategoryBtn>
      {/* 신상품 */}
      <TitleName title="NEW ARRIVAL" subtitle="新商品" />
      <div>
        <LensItem />
        <LensItem />
      </div>
      <CategoryBtn more>もっと見る</CategoryBtn>
      {/* 이벤트 배너 */}
      <Event />
      {/* 공지 */}
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
      {/* Footer */}
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

//임시 추천 아이템

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

export default Main;
