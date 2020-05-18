import styled from 'styled-components';
import { Header } from 'semantic-ui-react';

export const BlockHeader = styled(Header)({
  margin: '0!important',
  height: '100%',
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  background: '#000000',
});

export const LogoWrapper = styled.div`
  width: 20%;
    `;

export const NavBarWrapper = styled.div`
  width: 60%;
    `;

export const BtnWrapper = styled.div`
  width: 20%;
    `;
