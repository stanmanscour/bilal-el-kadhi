import React from "react";
import "../../styles/index.scss";
import Header from "../Header";
import Footer from "../Footer";

import LayoutWrapper from "./elements";

const Layout = ({
  isBlack,
  isShy,
  headerChildren,
  footerChildren,
  children
}) => {
  return (
    <LayoutWrapper isBlack={isBlack}>
      <Header isShy={isShy} children={headerChildren} isBlack={isBlack} />
      {children}
      {!isShy && <Footer children={footerChildren} />}
    </LayoutWrapper>
  );
};

Layout.defaultProps = {
  isBlack: false,
  isShy: false,
  headerChildren: null,
  footerChildren: null,
  children: null
};

export default Layout;
