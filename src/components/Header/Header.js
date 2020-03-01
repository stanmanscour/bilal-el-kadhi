import React from "react";
import { Link } from "gatsby";

import HeaderWrapper from "./elements";

const Header = ({ backUrl, isBlack, isShy, contentTitle }) => {
  return (
    <HeaderWrapper>
      {backUrl ? (
        <HeaderWrapper.BackLink isBlack={isBlack} to={backUrl}>
          BACK
        </HeaderWrapper.BackLink>
      ) : (
        <HeaderWrapper.Logo isBlack={isBlack} to="/">
          <h1>Bilal El Kadhi</h1>
        </HeaderWrapper.Logo>
      )}
      {!isShy && (
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
      )}
      {contentTitle && (
        <HeaderWrapper.Title isBlack={isBlack}>
          {contentTitle}
        </HeaderWrapper.Title>
      )}
    </HeaderWrapper>
  );
};

export default Header;
