import styled from 'styled-components';
import DetailSection from '../components/ItemDetails/DetailSection';
import DetailWrap from '../components/ItemDetails/DetailWrap';
import Wrapslide from '../components/ItemDetails/DetailSlide';
import { Link, useParams } from 'react-router-dom';
import { useProductDetail } from '../api/productdetailApi';

function ItemDetail() {
  const { id } = useParams();
  const { data, isLoading } = useProductDetail(id);

  function handleClick() {
    alert('준비중입니다.');
  }

  if (isLoading) {
    return <div>loading....</div>;
  }

  return (
    <div>
      <Container>
        <Itemdetaildiv>
          <span>
            <Link to={'/'} style={{ textDecoration: 'none' }}>
              홈
            </Link>
            &nbsp;&nbsp; {'>'} 제품 상세 페이지
          </span>
        </Itemdetaildiv>

        <DetailWrap
          product={data.data.data}
          handleClick={handleClick}
          id={id}
        />

        <Wrapslide handleClick={handleClick} />

        <DetailSection product={data.data.data} handleClick={handleClick} />
      </Container>
    </div>
  );
}
const Container = styled.div`
  width: 80%;
  height: auto;
  margin: 0 auto;
  padding: 0;
`;
const Itemdetaildiv = styled.div`
  width: 12%;
  height: 100px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  span {
    font-family: 'Noto Sans JP';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: -0.016em;
  }
`;

export default ItemDetail;
