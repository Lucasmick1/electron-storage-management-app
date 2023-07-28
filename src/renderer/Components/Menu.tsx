import React from 'react';
import { styled } from 'styled-components';

import { MenuItems } from 'renderer/modules/types';
import Card from './Card';
import Flex from './Flex';
import Text from './Text';

export type MenuProps = {
  items: MenuItems[];
  refs?: React.RefObject<HTMLDivElement>;
};

const Menu: React.FC<MenuProps> = ({ items, refs }) => (
  <Wrapper height="fit-content" flexDirection="column" gap="8px" ref={refs}>
    {items.map(({ onClick, value, addonBefore }) => (
      <Row onClick={onClick} key={value}>
        {addonBefore}
        <Text>{value}</Text>
      </Row>
    ))}
  </Wrapper>
);

const Row = styled(Flex)`
  height: 38px;
  width: 100%;
  align-items: center;
  background-color: white;
  border-radius: 4px;
  cursor: pointer;
  gap: 8px;
  padding: 8px;
  transition: 0.3s;
  box-sizing: border-box;
  &:hover {
    background-color: #eaeaea;
    transition: 0.3s;
  }
`;

const Wrapper = styled(Card)`
  position: absolute;
  top: 30px;
  right: 10px;
  padding: 8px;
  box-sizing: border-box;
  min-width: 200px !important;
`;

export default Menu;
