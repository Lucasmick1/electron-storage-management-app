import React, { PropsWithChildren } from 'react';
import { styled } from 'styled-components';

const Page: React.FC<PropsWithChildren> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: calc(100vh - 100px);
`;

export default Page;
