import { styled } from 'styled-components';
import { BsPlusSquare } from 'react-icons/bs';
import { LuLayoutDashboard } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';
import Flex from './Flex';
import Text from './Text';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Flex
        alignItems="center"
        gap="8px"
        style={{ cursor: 'pointer' }}
        onClick={() => navigate('/create')}
        onKeyDown={(event) => {
          if (event.key === 'Enter') navigate('/create');
        }}
      >
        <BsPlusSquare size="24px" fill="#00BD6A" stroke="#00BD6A" />
        <Text>Novo</Text>
      </Flex>
      <Flex
        alignItems="center"
        gap="8px"
        style={{ cursor: 'pointer' }}
        onClick={() => navigate('/list')}
        onKeyDown={(event) => {
          if (event.key === 'Enter') navigate('/list');
        }}
      >
        <LuLayoutDashboard size="24px" stroke="#FF7A00" />
        <Text>Dashboard</Text>
      </Flex>
    </Wrapper>
  );
};

const Wrapper = styled(Flex).attrs({
  width: '100%',
  height: '52px',
  gap: '16px',
})`
  background-color: white;
  color: black;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
`;

export default Navbar;
