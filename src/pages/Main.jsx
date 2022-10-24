import styled from 'styled-components';
import NavBar from '../components/common/NavBar';
import Footer from '../components/common/Footer';
import CategoryBtn from '../components/main/CategoryBtn';
import LensItem from '../components/common/LensItem';
import Event from '../components/main/Event';
import notice from '../static/img/notice.png';
import stroke from '../static/img/Vector.png';
import TitleName from '../components/main/TitleName';
import FilterMenu from '../components/main/FilterMenu';
import { useGetProducts } from '../api/productApi';
import MainSlide from '../components/main/MainSlide';
import PickupItem from '../components/itemList/PickupItem';

const Main = () => {
  const { data, isLoading } = useGetProducts();
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  return (
    <>
      {/* 메인 슬라이드 */}
      <div>
        <MainSlide />
      </div>
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
      <Center>
        <LensItem products={data.data.data} />
      </Center>
      <CategoryBtn more>もっと見る</CategoryBtn>
      {/* 추천 아이템 */}
      <TitleName title="PICKUP ITEM" subtitle="スタッフおすすめ" />
      <Center>
        <Items>
          {data.data.data
            .filter((data) => data.sellPrice <= 990)
            .map((data) => (
              <div>
                <IMG src={data.image1} alt="이미지" />
                <Title>{data.name}</Title>
                <Price>{data.sellPrice}</Price>
              </div>
            ))}
        </Items>
      </Center>
      <CategoryBtn more>もっと見る</CategoryBtn>
      {/* 신상품 */}
      <TitleName title="NEW ARRIVAL" subtitle="新商品" />
      <div>
        {/* <Center>
          <Items>
            {data.data.data
              .filter((data) => data.sellPrice > 990)
              .map((data) => (
                <LensItem products={data} />
              ))}
          </Items>
        </Center> */}
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
    </>
  );
};

const Center = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

// const CenterDiv = styled.div`
//   display: flex;
//   margin-left: 8vw;
//   margin-right: 8vw;
//   margin-top: 80px;
// `;

const MenuHr = styled.hr`
  margin-top: -4px;
  // width:1275px;
  margin-right: 8vw;
  margin-left: 8vw;
  border: 0px;
  border-bottom: 4px solid #d3d6db;
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
  grid-template-columns: repeat(4, 282px);
  gap: 24px;
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

export default Main;
