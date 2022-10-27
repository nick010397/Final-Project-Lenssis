import React from 'react';
import styled from 'styled-components';
import WrapDetail from './WrapDetail';
import WrapImages from './WrapImages';

function DetailWrap({ product, handleClick, Cart, setCart }) {
  return (
    <Container>
      <WrapImages product={product}></WrapImages>
      <WrapDetail
        product={product}
        handleClick={handleClick}
        Cart={Cart}
        setCart={setCart}
      ></WrapDetail>
    </Container>
  );
}

export default DetailWrap;

const Container = styled.div`
  width: 100%;
  height: 1300px;
`;
