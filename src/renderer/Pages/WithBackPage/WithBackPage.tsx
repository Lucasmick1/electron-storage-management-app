import React, { PropsWithChildren } from 'react';
import BackPage from 'renderer/Components/BackPage';
import Flex from 'renderer/Components/Flex';

const WithBackPage: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Flex flexDirection="column">
      <BackPage />
      {children}
    </Flex>
  );
};

export default WithBackPage;
