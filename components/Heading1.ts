import styled from 'styled-components';
import { device } from './helpers/deviceSizes';

export const Heading1 = styled.h1`
  font-size: 3rem;
  text-transform: uppercase;
  word-break: break-word;
  text-align: ${(props) => (props.centered ? 'center' : 'left')};
  color: ${(props) => (props.white ? '#fff' : '#000000')};
`;
