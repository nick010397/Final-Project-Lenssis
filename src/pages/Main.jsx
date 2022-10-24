import styled from 'styled-components';
import CategoryBtn from '../components/common/CategoryBtn';
import LensItem from '../components/common/LensItem';
import Event from '../components/main/Event';
import notice from '../static/img/notice.png';
import TitleName from '../components/main/TitleName';
import FilterMenu from '../components/main/FilterMenu';
import { useGetProducts } from '../api/productApi';
import MainSlide from '../components/main/MainSlide';
import PickupItem from '../components/itemList/PickupItem';
import NewItem from '../components/itemList/NewItem';
import Notice from '../components/main/Notice';

function Main() {
  const { data, isLoading } = useGetProducts();
  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
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
      <div>
        <LensItem products={data.data.data} />
      </div>
      <CategoryBtn more>もっと見る</CategoryBtn>
      {/* 추천 아이템 */}
      <TitleName title="PICKUP ITEM" subtitle="スタッフおすすめ" />
      <Center>
        <PickupItem products={data.data.data} />
      </Center>
      <CategoryBtn more>もっと見る</CategoryBtn>
      {/* 신상품 */}
      <TitleName title="NEW ARRIVAL" subtitle="新商品" />
      <Center>
        <NewItem products={data.data.data} />
      </Center>
      <CategoryBtn more>もっと見る</CategoryBtn>
      {/* 이벤트 배너 */}
      <Event />
      {/* 공지 */}
      <TitleName title="NOTICE" subtitle="お知らせ" />
      <NoticImg>
        <img src={notice} alt="공지" />
      </NoticImg>
      <Notice />
      <Notice />
      <Notice />
      <Notice />
      <CategoryBtn end>もっと見る</CategoryBtn>
    </div>
  );
}

const Center = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

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

export default Main;
