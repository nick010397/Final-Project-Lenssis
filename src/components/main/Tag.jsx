import React from 'react';
import styled from 'styled-components';
function Tag({ index }) {
  return <TagDiv>{index}</TagDiv>;
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
