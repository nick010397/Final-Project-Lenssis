import styled from 'styled-components';
import CategoryBtn from '../components/common/CategoryBtn';
import Event from '../components/main/Event';
import notice from '../static/img/notice.png';
import TitleName from '../components/main/TitleName';
import FilterMenu from '../components/main/FilterMenu';
import { useGetProducts } from '../api/productApi';
import MainSlide from '../components/main/MainSlide';
import PickupItem from '../components/itemList/PickupItem';
import Notice from '../components/main/Notice';
import Item from '../components/itemList/Item';
import Tag from '../components/main/Tag';
import { Link } from 'react-router-dom';

function Main() {
  const { data, isLoading } = useGetProducts();
  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <Container>
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
      <Index>
        <Rel>
          <Grid>
            {data.data.data
              .map((product, index) => <Tag key={index} index={index + 1} />)
              .splice(0, 15)}
          </Grid>
        </Rel>
      </Index>

      <AllLens>
        {data.data.data
          ?.map((product, index) => {
            return <Item key={product.id} {...product} />;
          })
          .splice(0, 15)}
      </AllLens>
      <StyledLink to="/itemlist">
        <CategoryBtn className="more">もっと見る</CategoryBtn>
      </StyledLink>
      {/* 추천 아이템 */}
      <TitleName title="PICKUP ITEM" subtitle="スタッフおすすめ" />
      <PickLens>
        {data.data.data
          ?.filter((product, index) => product.colorName === 'ブラウン')
          .map((product) => <PickupItem key={product.id} {...product} />)
          .splice(0, 8)}
      </PickLens>
      <StyledLink to="/itemlist">
        <CategoryBtn className="more">もっと見る</CategoryBtn>
      </StyledLink>
      {/* 신상품 */}
      <TitleName title="NEW ARRIVAL" subtitle="新商品" />
      <AllLens>
        {data.data.data
          ?.filter((product) => product.sellPrice <= 990)
          .map((product) => (
            <Item key={product.id} {...product} />
          ))}
      </AllLens>
      <StyledLink to="/itemlist">
        <CategoryBtn className="more">もっと見る</CategoryBtn>
      </StyledLink>
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
      <StyledLink to="/">
        <CategoryBtn className="end">もっと見る</CategoryBtn>
      </StyledLink>
    </Container>
  );
}
const Container = styled.div`
  .more {
    margin-top: 96px;
    margin-bottom: 225px;
  }
  .end {
    margin-top: 85px;
    margin-bottom: 165px;
  }
`;
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
  position: relative;
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

const Index = styled.div`
  display: inline-block;
  position: absolute;
  z-index: 9;
`;

const Rel = styled.div`
  position: relative;
  float: left;
  width: 100%;
  margin-top: 2.7%;
`;
const Grid = styled.div`
  position: relative;
  margin: 0 10.4vw 16px 10.4vw;
  display: grid;
  grid-template-columns: repeat(5, 220px);
  grid-column-gap: 25px;
  grid-row-gap: 390px;
  justify-content: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
export default Main;
