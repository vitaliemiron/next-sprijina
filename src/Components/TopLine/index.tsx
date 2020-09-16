import React from 'react';
import { Container } from '@Components';
import * as S from './styled';

export const TopLine: React.FunctionComponent = () => {
  return (
    <S.TopLineContainer>
      <Container>
        <div className="contacts">
          <a href="emailto:info@sprijina.md">info@sprijina.md</a>
          <span>
            Republica Moldova, Chișinău, str. Gavriil Bănulescu-Bodoni 61
          </span>
        </div>
      </Container>
    </S.TopLineContainer>
  );
};
