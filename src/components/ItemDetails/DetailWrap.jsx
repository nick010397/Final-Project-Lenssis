import React from 'react';
import styled from 'styled-components';
import WrapDetail from './WrapDetail';
import DetailSitPvi from './WrapPvi';

function DetailWrap() {
  return (
    <Container>
      <hr></hr>
      <DetailSitPvi></DetailSitPvi>
      <WrapDetail></WrapDetail>
    </Container>
  );
}

export default DetailWrap;

const Container = styled.div`
  width: 100%;
  height: 1200px;
`;
