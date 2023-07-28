/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { styled } from 'styled-components';

type ToggleButtonProps = {
  onChange: () => void;
};

const ToggleButton: React.FC<ToggleButtonProps> = ({ onChange }) => {
  return (
    <Wrapper>
      <label className="switch">
        <input type="checkbox" onChange={onChange} />
        <span className="slider round" />
      </label>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 24px;
  }

  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #00bd6a;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: '';
    height: 20px;
    width: 20px;
    left: 2px;
    bottom: 2px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: #ff7a00;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(36px);
    -ms-transform: translateX(36px);
    transform: translateX(36px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;

export default ToggleButton;
