import { useNavigate } from 'react-router-dom';
import Card from 'renderer/Components/Card';
import Flex from 'renderer/Components/Flex';
import { getTable } from 'renderer/DataAccess';
import { Product } from 'renderer/modules/types';

const Home = () => {
  const navigate = useNavigate();
  const products = getTable<Product[]>('products' ?? []) ?? [];

  if (!products.length) return <>Nenhum produto cadastrado</>;

  return (
    <Flex
      flexDirection="row"
      gap="24px"
      alignItems="flex-start"
      justifyContent="flex-start"
    >
      {products.map(({ name, amount, id }) => (
        <Card height="150px">
          <Flex
            width="100%"
            flexDirection="column"
            alignItems="center"
            justifyContent="flex-start"
            gap="24px"
            style={{ cursor: 'pointer' }}
            onClick={() => navigate(`/product/${id}`)}
          >
            <span>{name}</span>
            <Flex gap="16px">
              <span>Quantidade em estoque: </span>
              <span>{amount ?? 0}</span>
            </Flex>
          </Flex>
        </Card>
      ))}
    </Flex>
  );
};

export default Home;
