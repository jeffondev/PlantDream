import React from 'react';
import styled from 'styled-components';
import SeedItem from './SeedItem';

const SeedListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function SeedList() {
  return (
    <SeedListBlock>
      <SeedItem text="프로젝트 생성하기" done={true} />
      <SeedItem text="컴포넌트 스타일링 하기" done={true} />
      <SeedItem text="Context 만들기" done={false} />
      <SeedItem text="기능 구현하기" done={false} />

    </SeedListBlock>
  );
}

export default SeedList;