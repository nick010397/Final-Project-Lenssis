import React from 'react';
import styled from 'styled-components';
import WrapDetail from './WrapDetail';
import WrapPvi from './WrapImages';

function DetailWrap() {
  return (
    <Container>
      <WrapPvi></WrapPvi>
      <WrapDetail></WrapDetail>
    </Container>
  );
}

export default DetailWrap;

const Container = styled.div`
  width: 100%;
  height: 900px;
  max-height: 900px;
`;
