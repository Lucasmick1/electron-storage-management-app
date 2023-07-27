import React, { forwardRef } from 'react';
import { styled } from 'styled-components';

type InputProps = {
  value: string;
  onChange: (value: string) => void;
};
const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ onChange, value }, ref) => (
    <div>
      <Wrapper
        ref={ref}
        type="text"
        onChange={(e) => onChange(e.target.value)}
        {...{ value }}
      />
    </div>
  )
);

const Wrapper = styled.input`
  height: 30px;
  border-radius: 4px;
  border: 1px solid #6a7486;
  box-sizing: border-box;
  padding: 8px;
  outline: none;
`;

export default Input;
