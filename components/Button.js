import styled from 'styled-components';

export const Button = styled.button`
  font-size: 1.2rem;
  text-transform: uppercase;
  text-align: center;
  border: 1px solid black;
  padding: 0.5rem 3rem;
  color: black;
  font-weight: 700;
  background-color: white;
  outline: none;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    background-color: black;
    color: white;
  }
`;
