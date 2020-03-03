import React from "react";
import FooterWrapper from "./elements";

const Footer = ({ isBlack }) => {
  return (
    <FooterWrapper>
      <FooterWrapper.ContactLink
        isBlack={isBlack}
        href="bilalelkadhi@studio.com"
      >
        bilalelkadhi@studio.com
      </FooterWrapper.ContactLink>
    </FooterWrapper>
  );
};

export default Footer;
