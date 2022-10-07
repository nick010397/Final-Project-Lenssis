import React from 'react';
import styled from 'styled-components';

function DetailSection() {
  return (
    <Container>
      <center>
        <img
          src="https://lenssis.jp/data/editor/2112/dc0adf8c18404aa304f7803e94ce8ab6_1640067355_7707.jpg"
          alt=""
        />
        <img
          src="https://lenssis.jp/data/editor/2103/b18665a8c73e3fb369ef3eedf797e6ad_1617166449_9869.jpg"
          alt=""
        />
      </center>
    </Container>
  );
}

export default DetailSection;

const Container = styled.div`
  width: 100%;
  height: auto;
`;
