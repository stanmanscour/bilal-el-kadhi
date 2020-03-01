import React from "react";
import { Link } from "gatsby";
import IconHamburgerBlack from "../../assets/menu-hamburger-black.svg";
import IconHamburgerWhite from "../../assets/menu-hamburger-white.svg";

import HeaderWrapper from "./elements";

const Header = ({ isBlack, isShy, children }) => {
  return (
    <HeaderWrapper>
      {children ? (
        children
      ) : (
        <HeaderWrapper.Logo isBlack={isBlack} to="/">
          <h1>Bilal El Kadhi</h1>
        </HeaderWrapper.Logo>
      )}
      {!isShy && (
        <>
          <HeaderWrapper.NavDesktop isBlack={isBlack}>
            <li>
              <Link activeClassName="active" to="/prints">
                Prints
              </Link>
            </li>
            <li>
              <Link activeClassName="active" to="/films">
                Films
              </Link>
            </li>
          </HeaderWrapper.NavDesktop>
          <HeaderWrapper.MobileDesktop>
            {isBlack ? <IconHamburgerWhite /> : <IconHamburgerBlack />}
          </HeaderWrapper.MobileDesktop>
        </>
      )}
    </HeaderWrapper>
  );
};

export default Header;
