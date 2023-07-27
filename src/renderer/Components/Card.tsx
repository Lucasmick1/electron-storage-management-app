import { styled } from 'styled-components';

import Flex from './Flex';

type CardProps = {
  width?: string;
  height?: string;
};

const Card = styled(Flex)<CardProps>`
  padding: 16px;
  background-color: white;
  color: black;

  min-width: 240px;
  border-radius: 8px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

  ${(props) =>
    Object.entries(props).reduce(
      (acc, [key, value]) => `${acc}${key}:${value};`,
      ''
    )}
`;

export default Card;
