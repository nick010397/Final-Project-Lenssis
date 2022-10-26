import React from 'react';
import styled from 'styled-components';
function Tag({ index }) {
  return (
    <Center>
      <TagDiv>{index}</TagDiv>
    </Center>
  );
}

const Center = styled.div`
  // position: absolute;
  z-index: 1;
  // left: 10.4vw;
  // top: 1370px;
`;

const TagDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: #f9b0aa;
`;

export default Tag;
