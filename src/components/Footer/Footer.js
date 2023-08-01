import React from 'react';
import FooterWrapper from './elements';

const Footer = ({ isBlack, canGoBack }) => {
  const year = new Date().getFullYear()
  return (
    <FooterWrapper>
      {!canGoBack ? (
        <FooterWrapper.Text isBlack={isBlack}>
          © {year} BILAL EL KADHI.
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
          contact@bilalelkadhi.studio
        </FooterWrapper.ContactLink>
      ) : (
        ''
      )}
    </FooterWrapper>
  );
};

export default Footer;
