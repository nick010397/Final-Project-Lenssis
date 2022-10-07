import React from 'react';
import styled from 'styled-components';
import DetailTab from './DetailSection';
import DetailWrap from './DetailWrap';

function DetailContainer() {
  return (
    <Container>
      <DetailWrap></DetailWrap>
      <hr />
      <DetailTab></DetailTab>
    </Container>
  );
}

export default DetailContainer;

const Container = styled.div`
  width: 100%;
  height: auto;
  background-color: white;
`;
