import styled from 'styled-components';

const Divider = styled.div<{ type: 'horizontal' | 'vertical'; color?: string }>`
  width: ${({ type }) => (type === 'horizontal' ? '100%' : 'unset')};
  height: ${({ type }) => (type === 'vertical' ? '100%' : 'unset')};
  ${({ type, color }) =>
    type === 'vertical'
      ? `border-left: 0.5px solid ${color || '#BDC2CC'}`
      : `border-top: 0.5px solid ${color || '#BDC2CC'}`}
`;

export default Divider;
