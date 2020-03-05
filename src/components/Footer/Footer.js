import React from "react";
import FooterWrapper from "./elements";

const Footer = ({ isBlack }) => {
  return (
    <FooterWrapper>
      <FooterWrapper.ContactLink
        isBlack={isBlack}
        href="mailto:contact@bilalelkadhi.studio"
      >
        contact@bilalelkadhi.studio
      </FooterWrapper.ContactLink>
    </FooterWrapper>
  );
};

export default Footer;
