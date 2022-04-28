import React from 'react';
import FooterWrapper from './elements';

const Footer = ({ isBlack, canGoBack }) => {
  return (
    <FooterWrapper>
      {!canGoBack ? (
        <FooterWrapper.Text isBlack={isBlack}>
          © 2022 BILAL EL KADHI.
          <br />
          All content copyright the artist. No commercial use without express
          written permission.
        </FooterWrapper.Text>
      ) : (
        ''
      )}
      {!canGoBack ? (
        <FooterWrapper.ContactLink
          isBlack={isBlack}
          href="mailto:contact@bilalelkadhi.studio"
        >
          bilal.elkadhi@gmail.com
        </FooterWrapper.ContactLink>
      ) : (
        ''
      )}
    </FooterWrapper>
  );
};

export default Footer;
