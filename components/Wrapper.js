import styled from 'styled-components';
import { device } from './helpers/deviceSizes';

export const Wrapper = styled.section`
  padding: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${(props) => (props.stacked ? 'column' : 'row')};

  @media ${device.tablet} {
    flex-direction: ${(props) => (props.stacked ? 'row' : 'column')};
  }
`;
