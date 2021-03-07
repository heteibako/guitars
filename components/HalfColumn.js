import styled from 'styled-components';

export const HalfColumn = styled.div`
  width: 50%;
  padding: 1rem;
  margin: 0 auto;
  display: flex;
  justify-content: ${(props) => (props.center ? 'center' : 'flex - start')};
`;
