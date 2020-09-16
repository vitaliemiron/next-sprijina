import styled from 'styled-components';
import { AppBar as MuiAppBar } from '@material-ui/core';
import { theme } from '@Utils';

export const AppBar = styled(MuiAppBar)`
  && {
    background: ${theme.colors.yellow.base};
  }
`;
