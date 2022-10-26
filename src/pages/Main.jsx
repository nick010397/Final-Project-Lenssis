import styled from 'styled-components';
import CategoryBtn from '../components/common/CategoryBtn';
import Event from '../components/main/Event';
import notice from '../static/img/notice.png';
import TitleName from '../components/main/TitleName';
import FilterMenu from '../components/main/FilterMenu';
import { useGetProducts } from '../api/productApi';
import MainSlide from '../components/main/MainSlide';
import PickupItem from '../components/itemList/PickupItem';
import NewItem from '../components/itemList/NewItem';
import Notice from '../components/main/Notice';
import Item from '../components/itemList/Item';
import { useProducts } from '../api/testApi';
import Tag from '../components/main/Tag';

function Main() {
  const { data, isLoading } = useGetProducts();
  // const { data, isLoading } = useProducts('price_asc');
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  console.log(data);

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
      <div>
        <FilterMenu />
        <MenuHr />
      </div>
      {/* 렌즈 아이템 */}
      <div>
        <AllLens>
          {data.data.data
            ?.map((product, index) => {
              return (
                <>
                  <TagStyle>
                    <Tag index={product.index} />
                  </TagStyle>
                  <Item {...product} />
                </>
              );
            })
            .slice(0, 15)}
        </AllLens>
      </div>
      <CategoryBtn more>もっと見る</CategoryBtn>
      {/* 추천 아이템 */}
      <TitleName title="PICKUP ITEM" subtitle="スタッフおすすめ" />
      <PickLens>
        {data.data.data
          ?.filter((product, index) => product.colorName === 'ブラウン')
          .map((product) => <PickupItem {...product} />)
          .splice(0, 8)}
      </PickLens>
      <CategoryBtn more>もっと見る</CategoryBtn>
      {/* 신상품 */}
      <TitleName title="NEW ARRIVAL" subtitle="新商品" />
      <AllLens>
        {data.data.data
          ?.filter((product) => product.sellPrice <= 990)
          .map((product) => (
            <Item {...product} />
          ))}
      </AllLens>
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
  margin-right: 10.5vw;
  margin-left: 10.5vw;
  border: none;
  border-top: 4px solid #d3d6db;
`;

const NoticImg = styled.div`
  text-align: center;
  margin-bottom: 53px;
`;

const AllLens = styled.div`
  margin: 0 8vw 16px 8vw;
  display: grid;
  grid-template-columns: repeat(5, 220px);
  grid-gap: 25px;
  justify-content: center;
`;

const PickLens = styled.div`
  margin: 0 8vw 16px 8vw;
  display: grid;
  grid-template-columns: repeat(4, 282px);
  gap: 24px;
  justify-content: center;
`;

const TagStyle = styled.div`
  position: absolute;
`;
export default Main;
