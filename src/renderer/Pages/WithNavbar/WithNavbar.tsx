import React, { PropsWithChildren } from 'react';
import Flex from 'renderer/Components/Flex';
import Navbar from 'renderer/Components/Navbar';

const WithNavbar: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Flex height="100vh" flexDirection="column" style={{ margin: '0' }}>
      <Navbar />
      {children}
    </Flex>
  );
};

export default WithNavbar;
