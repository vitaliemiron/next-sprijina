import React from 'react';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Container } from '../Container';

import * as S from './styled';

export const TopLine: React.FunctionComponent = () => {
  return (
    <S.TopLineContainer>
      <Container>
        <div className="contacts">
          <a
            className="icon"
            href="mailto:info@sprijina.md"
            aria-label="Send an email"
          >
            <MailOutlineIcon />
            info@sprijina.md
          </a>
          <a
            className="icon"
            href="https://goo.gl/maps/Y1wjB9iPW1bdxDKE6"
            target="_blank"
            rel="noreferrer"
            aria-label="open google maps with location"
          >
            <LocationOnIcon />
            Republica Moldova, Chișinău, str. Gavriil Bănulescu-Bodoni 61
          </a>
        </div>
      </Container>
    </S.TopLineContainer>
  );
};
