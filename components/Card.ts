import styled from 'styled-components';
import { device } from './helpers/deviceSizes';

export const Card = styled.div`
  padding: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  margin: 1em;
  min-width: 4em;
  border-radius: 10px;
  background: #ffffff;
  box-shadow: 11px 11px 22px #ebebeb, -11px -11px 22px #ffffff;
`;
