import styled from 'styled-components';
import { device } from './helpers/deviceSizes';

export const HalfColumn = styled.div`
  width: 50%;
  padding: 1rem;
  margin: 0 auto;
  display: flex;
  justify-content: ${(props) => (props.center ? 'center' : 'flex - start')};
  @media ${device.laptopL} {
    width: 50%;
  }
  @media ${device.mobileS} {
    width: 100%;
  }
  @media ${device.mobileM} {
    width: 100%;
  }
  @media ${device.mobileL} {
    width: 100%;
  }
`;
