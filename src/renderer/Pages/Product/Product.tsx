import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import { getTable } from 'renderer/DataAccess';
import Flex from 'renderer/Components/Flex';
import Card from 'renderer/Components/Card';
import ProductHistory from 'renderer/Components/ProductHistory';
import ToggleButton from 'renderer/Components/ToggleButton';
import Text from 'renderer/Components/Text';

import {
  ProductHistory as ProductHistoryType,
  Product as ProductType,
} from '../../modules/types';
import EditableText from 'renderer/Containers/EditableText';

const Product: React.FC = () => {
  const [type, setType] = useState('input');
  const { id } = useParams();

  const products = getTable<ProductType[]>('products') ?? [];
  const product = products.find(({ id: productId }) => productId === id);

  const productsHistory =
    getTable<ProductHistoryType[]>('productsHistory') ?? [];

  const productHistory = productsHistory
    .filter(({ product: historyProduct }) => product!.id === historyProduct)
    .sort(
      (a, b) =>
        new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
    )
    .reverse();

  console.log(type);

  if (!product) return <>Produto não encontrado</>;

  return (
    <Flex
      width="70vw"
      height="100%"
      justifyContent="flex-start"
      flexDirection="column"
      gap="16px"
    >
      <Card width="100%" height="30%">
        <Flex
          width="100%"
          justifyContent="flex-start"
          flexDirection="column"
          alignItems="center"
        >
          <EditableText />
          <Text fontSize="22px" color="#484D59">
            {product.name}
          </Text>

          <Flex width="100%" flexDirection="column">
            <ToggleButton
              onChange={() =>
                setType((prev) => (prev === 'output' ? 'input' : 'output'))
              }
            />
          </Flex>
        </Flex>
      </Card>
      <Card width="100%" height="70%">
        <Flex
          width="100%"
          gap="16px"
          flexDirection="column"
          style={{
            padding: '20px',
            boxSizing: 'border-box',
          }}
        >
          {productHistory.map((props) => (
            <ProductHistory {...props} />
          ))}
        </Flex>
      </Card>
    </Flex>
  );
};

export default Product;
