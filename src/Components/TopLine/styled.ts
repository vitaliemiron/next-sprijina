import styled from 'styled-components';
import { theme } from '@Utils';

export const TopLineContainer = styled.div`
  display: grid;
  background-color: ${theme.colors.gray.base};
  padding: 10px;
  color: ${theme.colors.white.base};

  .contacts {
    display: grid;
    gap: 10px;
    grid-template-columns: max-content max-content;
  }

  .icon {
    display: grid;
    grid-template-columns: min-content max-content;
    align-items: center;
    gap: 5px;
  }
`;
