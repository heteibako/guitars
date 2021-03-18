import styled from 'styled-components';
import { device } from './helpers/deviceSizes';

export const Heading2 = styled.h2`
  font-size: ${(props) => (props.smaller ? '1.4rem' : '2.2rem')};
  text-transform: uppercase;
  word-break: break-word;
  color: #b1b1b1;
  text-align: ${(props) => (props.centered ? 'center' : 'left')};
`;
