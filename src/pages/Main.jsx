import styled from 'styled-components';
import CategoryBtn from '../components/common/CategoryBtn';
import LensItem from '../components/common/LensItem';
import Event from '../components/main/Event';
import notice from '../static/img/notice.png';
import TitleName from '../components/main/TitleName';
import FilterMenu from '../components/main/FilterMenu';
import { useGetProducts } from '../api/productApi';
import MainSlide from '../components/main/MainSlide';
import PickupItem from '../components/main/PickupItem';
import Notice from '../components/main/Notice';
import { Link } from 'react-router-dom';

function Main() {
  const { data, isLoading } = useGetProducts();
  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <Container>
      <div>
        <MainSlide />
      </div>
      <TitleName title="ALL LENS" subtitle="カラコン" />
      <div>
        <Center>
          <CategoryBtn category>ALL</CategoryBtn>
          <CategoryBtn category>1DAY</CategoryBtn>
          <CategoryBtn category>1MONTH</CategoryBtn>
        </Center>
      </div>
      <div>
        <FilterMenu />
        <MenuHr />
      </div>
      <AllLens>
        {data.data.data
          ?.map((product) => {
            return <LensItem key={product.id} {...product} />;
          })
          .splice(0, 15)}
      </AllLens>
      <StyledLink to="/itemlist/1">
        <CategoryBtn className="more">もっと見る</CategoryBtn>
      </StyledLink>
      <TitleName title="PICKUP ITEM" subtitle="スタッフおすすめ" />
      <PickLens>
        {data.data.data
          ?.filter((product) => product.colorName === 'ブラウン')
          .map((product) => <PickupItem key={product.id} {...product} />)
          .splice(0, 8)}
      </PickLens>
      <StyledLink to="/itemlist/1">
        <CategoryBtn className="more">もっと見る</CategoryBtn>
      </StyledLink>
      <TitleName title="NEW ARRIVAL" subtitle="新商品" />
      <AllLens>
        {data.data.data
          ?.filter((product) => product.sellPrice <= 990)
          .map((product) => (
            <LensItem key={product.id} {...product} />
          ))}
      </AllLens>
      <StyledLink to="/itemlist/1">
        <CategoryBtn className="more">もっと見る</CategoryBtn>
      </StyledLink>
      <Event />
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
  cursor: pointer;
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

const StyledLink = styled(Link)`
  text-decoration: none;
`;
export default Main;
