import React, { PropsWithChildren, CSSProperties, HTMLAttributes } from 'react';
import { styled } from 'styled-components';

type FlexProps = Pick<
  CSSProperties,
  'justifyContent' | 'alignItems' | 'flexDirection' | 'gap' | 'height' | 'width'
> &
  HTMLAttributes<HTMLDivElement> & { style?: CSSProperties };

const Flex: React.FC<PropsWithChildren & FlexProps> = ({
  children,
  ...props
}) => <Wrapper {...props}>{children}</Wrapper>;

const Wrapper = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  gap: ${({ gap }) => gap};
  height: ${({ height }) => height};
  width: ${({ width }) => width};
`;

export default Flex;
