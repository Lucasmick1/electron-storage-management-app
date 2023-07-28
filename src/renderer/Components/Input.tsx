import React, { forwardRef, CSSProperties, HTMLAttributes } from 'react';
import { styled } from 'styled-components';

type InputProps = CSSProperties &
  Omit<HTMLAttributes<HTMLInputElement>, 'onChange'> & {
    value: string;
    onChange: (value: string) => void;
  };
const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ onChange, value, ...rest }, ref) => (
    <Wrapper
      ref={ref}
      type="text"
      onChange={(e) => onChange(e.target.value)}
      {...{ value, ...rest }}
    />
  )
);

const Wrapper = styled.input<CSSProperties>`
  height: 30px;
  border-radius: 4px;
  border: 1px solid #6a7486;
  box-sizing: border-box;
  padding: 8px;
  outline: none;

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

export default Input;
