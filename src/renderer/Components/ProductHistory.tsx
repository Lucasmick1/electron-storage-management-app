import React from 'react';
import {
  TbArrowNarrowDown,
  TbArrowNarrowUp,
  TbArrowRightBar,
  TbExchange,
} from 'react-icons/tb';
import Card from 'renderer/Components/Card';
import Flex from 'renderer/Components/Flex';
import {
  PRODUCT_HISTORY_TYPES,
  ProductHistory as ProductHistoryType,
} from 'renderer/modules/types';

import Divider from './Divider';
import Text from './Text';

const ProductHistory: React.FC<ProductHistoryType> = ({
  createdAt,
  type,
  amount,
  price,
}) => {
  const ICONS = {
    [PRODUCT_HISTORY_TYPES.CREATE]: {
      icon: TbArrowRightBar,
      color: '#549EFF',
      kind: 'Criação',
    },
    [PRODUCT_HISTORY_TYPES.IN]: {
      icon: TbArrowNarrowDown,
      color: '#00BD6A',
      kind: 'Entrada',
    },
    [PRODUCT_HISTORY_TYPES.OUT]: {
      icon: TbArrowNarrowUp,
      color: '#FF7A00',
      kind: 'Saída',
    },
    [PRODUCT_HISTORY_TYPES.CHANGE]: {
      icon: TbExchange,
      color: '#852CA5',
      kind: 'Alteração',
    },
  };

  const { icon: Icon, color, kind } = ICONS[type];

  return (
    <Card height="28px" style={{ background: '#EFF0F2' }}>
      <Flex
        alignItems="center"
        gap="8px"
        width="100%"
        justifyContent="space-between"
      >
        <Flex
          alignItems="center"
          justifyContent="space-between"
          width="100px"
          height="100%"
        >
          <Flex gap="8px" alignItems="center">
            <Icon size="24px" fill={color} stroke={color} />
            <Text color={color}>{kind}</Text>
          </Flex>
          <Divider type="vertical" />
        </Flex>
        <Flex flexDirection="column" gap="2px" alignItems="center">
          {amount && (
            <Text color="#6A7486" fontSize="10px">
              Quantidade
            </Text>
          )}
          <Text>{amount}</Text>
        </Flex>
        {price && (
          <Flex flexDirection="column" gap="2px" alignItems="center">
            <Text color="#6A7486" fontSize="10px">
              Preço
            </Text>

            <Text>
              {new Intl.NumberFormat('pt-br', {
                currency: 'BRL',
                style: 'currency',
              }).format(price)}
            </Text>
          </Flex>
        )}
        {price && amount && (
          <Flex flexDirection="column" gap="2px" alignItems="center">
            <Text color="#6A7486" fontSize="10px">
              Valor da entrada
            </Text>

            <Text>
              {new Intl.NumberFormat('pt-br', {
                currency: 'BRL',
                style: 'currency',
              }).format(price * amount)}
            </Text>
          </Flex>
        )}
        <Flex flexDirection="column" gap="2px" alignItems="center">
          <Text color="#6A7486" fontSize="10px">
            Ocorrido em
          </Text>
          <Text>
            {new Intl.DateTimeFormat('pt-br', {
              dateStyle: 'medium',
            }).format(new Date(createdAt))}
          </Text>
        </Flex>
      </Flex>
    </Card>
  );
};

export default ProductHistory;
