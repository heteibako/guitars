import styled from 'styled-components';
import { device } from './helpers/deviceSizes';

export const Wrapper = styled.section`
  padding: 2em;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${device.laptopL} {
    flex-direction: ${(props) => (props.stacked ? 'row' : 'column')};
  }
  @media ${device.laptopM} {
    flex-direction: ${(props) => (props.stacked ? 'row' : 'column')};
  }
  @media ${device.mobileS} {
    flex-direction: ${(props) => (props.stacked ? 'column' : 'row')};
  }
  @media ${device.mobileM} {
    flex-direction: ${(props) => (props.stacked ? 'column' : 'row')};
  }
  @media ${device.mobileL} {
    flex-direction: ${(props) => (props.stacked ? 'column' : 'row')};
  }
`;
