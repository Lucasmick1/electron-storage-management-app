import React, { useState } from 'react';
import { v4 } from 'uuid';

import Button from 'renderer/Components/Button';
import Flex from 'renderer/Components/Flex';
import Input from 'renderer/Components/Input';
import { getTable, updateTable } from 'renderer/DataAccess';
import {
  PRODUCT_HISTORY_TYPES,
  Product,
  ProductHistory,
} from 'renderer/modules/types';

const Create: React.FC = () => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [insertAmout, setInsertAmount] = useState(false);

  function onClick() {
    const products = getTable<Product[]>('products') ?? [];
    const productsHistory = getTable<ProductHistory[]>('productsHistory') ?? [];
    const date = new Date().toISOString();
    const id = v4();
    const productAmount = amount ? Number(amount) : undefined;

    updateTable<Product[]>({
      name: 'products',
      table: [
        ...products,
        {
          name,
          id,
          amount: productAmount,
          createdAt: date,
          updatedAt: date,
        },
      ],
    });

    updateTable<ProductHistory[]>({
      name: 'productsHistory',
      table: [
        ...productsHistory,
        {
          id: v4(),
          product: id,
          createdAt: date,
          type: PRODUCT_HISTORY_TYPES.CREATE,
          amount: productAmount,
        },
      ],
    });

    setName('');
    setAmount('');
  }

  return (
    <Flex flexDirection="column" gap="8px">
      <div>
        <span>Inserir novo produto</span>
      </div>
      Nome: <Input value={name} onChange={setName} />
      <Flex gap="8px">
        <input
          type="checkbox"
          onChange={() => setInsertAmount((prev) => !prev)}
        />
        Inserir quantidade atual?
      </Flex>
      {insertAmout && (
        <>
          Quantidade:{' '}
          <Input
            value={amount}
            onChange={(value) => {
              if (!Number.isNaN(Number(value))) setAmount(value);
            }}
          />
        </>
      )}
      <Button {...{ onClick }}>Cadastrar</Button>
    </Flex>
  );
};

export default Create;
