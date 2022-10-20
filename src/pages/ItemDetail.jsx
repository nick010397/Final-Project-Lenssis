import styled from 'styled-components';
import DetailSection from '../components/ItemDetails/DetailSection';
import DetailWrap from '../components/ItemDetails/DetailWrap';
import Footer from '../components/common/Footer';
import NavBar from '../components/common/NavBar';
import Wrapslide from '../components/ItemDetails/DetailSlide';

function ItemDetail() {
  return (
    <div>
      <NavBar />

      <DetailWrap></DetailWrap>
      <Wrapslide></Wrapslide>

      <DetailSection></DetailSection>

      <Footer />
    </div>
  );
}
const Container = styled.div`
  width: 100%;
  height: auto;
  margin: 0 auto;
  padding: 0;
`;

export default ItemDetail;
