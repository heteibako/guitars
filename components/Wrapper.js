import styled from 'styled-components';
import { device } from './helpers/deviceSizes';
export const Wrapper = styled.section`
  padding: 4em;
  display: flex;

  @media ${device.laptopL} {
    flex-direction: row;
  }
  @media ${device.laptopM} {
    flex-direction: row;
  }
  @media ${device.mobileS} {
    flex-direction: column;
  }
  @media ${device.mobileM} {
    flex-direction: column;
  }
  @media ${device.mobileL} {
    flex-direction: column;
  }
`;
