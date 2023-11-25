import React from 'react';
import FooterWrapper from './elements';

const Footer = ({ isBlack, canGoBack }) => {
  // const year = new Date().getFullYear()
  return (
    <FooterWrapper>
      {!canGoBack ? (
        <FooterWrapper.Text isBlack={isBlack}>
          © 2024
        </FooterWrapper.Text>
      ) : (
        ''
      )}
      {/* {!canGoBack && (
        <FooterWrapper.ContactLink
          isBlack={isBlack}
          href="mailto:contact@bilalelkadhi.studio"
        >
          For all booking inquiries
        </FooterWrapper.ContactLink>
      )} */}
    </FooterWrapper>
  );
};

export default Footer;
