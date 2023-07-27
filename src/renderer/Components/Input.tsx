import React from 'react';

type InputProps = {
  value: string;
  onChange: (value: string) => void;
};

const Input: React.FC<InputProps> = ({ onChange, value }) => {
  return (
    <div>
      <input
        type="text"
        onChange={(e) => onChange(e.target.value)}
        {...{ value }}
      />
    </div>
  );
};

export default Input;
