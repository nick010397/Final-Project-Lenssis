import React from 'react';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Tag({ product, index }) {
  return (
    // <Link to={`/itemdetail/${product.id}`}>
    <TagDiv>{index}</TagDiv>
  );
}

const TagDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: #f9b0aa;
  z-index: 10;
`;

export default Tag;
