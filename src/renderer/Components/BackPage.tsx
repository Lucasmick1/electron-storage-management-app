import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { styled } from 'styled-components';

import Flex from './Flex';
import BaseButton from './Button';
import Text from './Text';

const BackPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const disabled = location.key === 'default';

  return (
    <Flex style={{ marginTop: '12px', marginLeft: '12px' }}>
      <Button onClick={() => navigate(-1)} disabled={disabled}>
        <Flex alignItems="center" gap="8px" justifyContent="center">
          <AiOutlineArrowLeft
            size="16px"
            fill={!disabled ? 'white' : '#c6c5c5e1'}
            stroke={!disabled ? 'white' : '#c6c5c5e1'}
            strokeWidth="18px"
          />
          <Text color={!disabled ? 'white' : '#c6c5c5e1'}>Voltar</Text>
        </Flex>
      </Button>
    </Flex>
  );
};

const Button = styled(BaseButton)<{ disabled: boolean }>`
  ${({ disabled }) =>
    !disabled
      ? `&:hover {
    background: #c757ff8a;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    transition: ease-in-out 0.3s;
  }`
      : `cursor: not-allowed;`}
`;

export default BackPage;
