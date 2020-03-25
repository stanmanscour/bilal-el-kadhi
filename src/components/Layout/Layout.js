import React from "react";
import "../../styles/index.scss";
import Header from "../Header";
import Footer from "../Footer";

import LayoutWrapper from "./elements";

const Layout = ({
  isBlack,
  isShy,
  headerContentTitle,
  canGoBack,
  footerChildren,
  children,
  isHome
}) => {
  return (
    <LayoutWrapper isBlack={isBlack}>
      <Header
        isShy={isShy}
        canGoBack={canGoBack}
        contentTitle={headerContentTitle}
        isBlack={isBlack}
        isHome={isHome}
      />
      {children}
      {!isShy && <Footer isBlack={isBlack} children={footerChildren} />}
    </LayoutWrapper>
  );
};

Layout.defaultProps = {
  isBlack: false,
  isShy: false,
  headerChildren: null,
  footerChildren: null,
  children: null,
  isHome: false
};

export default Layout;
