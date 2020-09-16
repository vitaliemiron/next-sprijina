import styled from 'styled-components';
import { theme } from '@Utils';

export const TopLineContainer = styled.div`
  display: grid;
  background-color: ${theme.colors.yellow.base};
  padding: 10px;

  .contacts {
    display: grid;
    gap: 10px;
    grid-template-columns: max-content max-content;
  }
`;
