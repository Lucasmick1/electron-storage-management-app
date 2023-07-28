import React, { useCallback, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getTable, updateTable } from 'renderer/DataAccess';
import Flex from 'renderer/Components/Flex';
import Card from 'renderer/Components/Card';
import ProductHistory from 'renderer/Components/ProductHistory';
import ToggleButton from 'renderer/Components/ToggleButton';
import Text from 'renderer/Components/Text';
import EditableText from 'renderer/Containers/EditableText';
import NewInputContainer from 'renderer/Containers/NewInput';
import ProductActionsMenuContainer from 'renderer/Containers/ProductActionsMenu';

import {
  ProductHistory as ProductHistoryType,
  Product as ProductType,
} from '../../modules/types';

const Product: React.FC = () => {
  const [type, setType] = useState(true);
  const { id } = useParams();

  const products = useMemo(() => getTable<ProductType[]>('products') ?? [], []);

  const [product, setProduct] = useState(
    products.find(({ id: productId }) => productId === id)!
  );

  const productsHistory =
    getTable<ProductHistoryType[]>('productsHistory') ?? [];

  const productHistory = productsHistory
    .filter(({ product: historyProduct }) => product.id === historyProduct)
    .sort(
      (a, b) =>
        new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
    )
    .reverse();

  const updateProduct = useCallback(
    (update: Omit<Partial<ProductType>, 'id'>) => {
      const updatedProduct = { ...product, ...update };

      setProduct(updatedProduct);
      updateTable({
        name: 'products',
        table: [
          ...products.filter((productTable) => productTable.id !== product.id),
          updatedProduct,
        ],
      });
    },
    [product, products]
  );

  if (!product) return <>Produto não encontrado</>;

  return (
    <Flex
      width="70vw"
      height="100%"
      justifyContent="flex-start"
      flexDirection="column"
      gap="16px"
    >
      <Card width="100%" height="35%">
        <Flex
          width="100%"
          justifyContent="flex-start"
          flexDirection="column"
          alignItems="center"
          gap="8px"
        >
          <Flex width="100%" justifyContent="space-between" alignItems="center">
            <EditableText
              value={product.name}
              onChange={(name) => updateProduct({ name })}
            />
            <ProductActionsMenuContainer id={product.id} />
          </Flex>

          <Flex
            width="100%"
            flexDirection="column"
            style={{ marginLeft: '16px' }}
            gap="16px"
          >
            Aqui deveria ficar um gráfico com a média de preço dos ultimos 3
            meses
            <Flex gap="16px" alignItems="center">
              <ToggleButton onChange={() => setType((prev) => !prev)} />
              <Text color={type ? '#00BD6A' : '#FF7A00'}>
                {type ? 'Entrada' : 'Saída'}
              </Text>
            </Flex>
            <Flex>{type ? <NewInputContainer /> : 'ola'}</Flex>
          </Flex>
        </Flex>
      </Card>
      <Card width="100%" height="65%">
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
            <ProductHistory {...props} key={props!.id} />
          ))}
        </Flex>
      </Card>
    </Flex>
  );
};

export default Product;
