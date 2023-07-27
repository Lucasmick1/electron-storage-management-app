import React, { useCallback, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getTable, updateTable } from 'renderer/DataAccess';
import Flex from 'renderer/Components/Flex';
import Card from 'renderer/Components/Card';
import ProductHistory from 'renderer/Components/ProductHistory';
import ToggleButton from 'renderer/Components/ToggleButton';
import EditableText from 'renderer/Containers/EditableText';

import {
  ProductHistory as ProductHistoryType,
  Product as ProductType,
} from '../../modules/types';

const Product: React.FC = () => {
  const [type, setType] = useState('input');
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
      const updatedProduct = { ...product, update };

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
      <Card width="100%" height="30%">
        <Flex
          width="100%"
          justifyContent="flex-start"
          flexDirection="column"
          alignItems="center"
        >
          <EditableText
            value={product.name}
            onChange={(name) => updateProduct({ name })}
          />

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
            <ProductHistory {...props} key={props!.id} />
          ))}
        </Flex>
      </Card>
    </Flex>
  );
};

export default Product;
