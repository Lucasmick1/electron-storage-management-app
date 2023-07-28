import React, {
  PropsWithChildren,
  CSSProperties,
  HTMLAttributes,
  forwardRef,
} from 'react';
import { styled } from 'styled-components';

type FlexProps = Pick<
  CSSProperties,
  'justifyContent' | 'alignItems' | 'flexDirection' | 'gap' | 'height' | 'width'
> &
  HTMLAttributes<HTMLDivElement> & {
    style?: CSSProperties;
  };

const Flex = forwardRef<HTMLDivElement, PropsWithChildren & FlexProps>(
  ({ children, ...props }, ref) => (
    <Wrapper {...props} ref={ref}>
      {children}
    </Wrapper>
  )
);

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
