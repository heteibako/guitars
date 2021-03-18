import { device } from '@components/helpers/deviceSizes';
import styled from 'styled-components';

export const Nav = styled.div`
  text-transform: uppercase;
  font-family: 'noir-bold', Arial, Helvetica, sans-serif;
  background-color: white;
  padding: 0 0.5em;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  & ul {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    & li {
      padding: 0.5rem;
      transition: 0.2s ease-in-out;
      &:hover {
        color: tomato;
      }
    }
  }
`;
