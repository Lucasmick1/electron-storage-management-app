import { CSSProperties } from 'react';
import styled from 'styled-components';

const Text = styled.span<CSSProperties>`
  color: ${({ color }) => color || '#343841'};
  font-size: 16px;
  font-weight: 600;

  ${(props) =>
    Object.entries(props).reduce(
      (acc, [key, value]) =>
        `${acc}${key.replace(
          /[A-Z]/g,
          (m) => `-${m.toLowerCase()}`
        )}:${value};`,
      ''
    )}
`;

export default Text;
