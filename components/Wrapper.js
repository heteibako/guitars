import styled from 'styled-components';
import { device } from './helpers/deviceSizes';

export const Wrapper = styled.section`
  padding: 2em;
  display: flex;
  justify-content: ${(props) => (props.center ? 'center' : 'flex-start')};
  align-items: ${(props) => (props.center ? 'center' : 'flex-start')};
  flex-direction: ${(props) => (props.stacked ? 'column' : 'row')};

  @media ${device.tablet} {
    flex-direction: ${(props) => (props.stacked ? 'row' : 'column')};
  }
`;
