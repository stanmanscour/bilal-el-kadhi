import React from "react";
import { navigate } from "@reach/router";
import AniLink from "gatsby-plugin-transition-link/AniLink";

import HeaderWrapper from "./elements";

const Header = ({ canGoBack, isBlack, isShy, contentTitle }) => {
  const goBack = () => {
    navigate(-1);
  };
  return (
    <HeaderWrapper>
      {canGoBack ? (
        <HeaderWrapper.BackLink isBlack={isBlack} onClick={goBack}>
          BACK
        </HeaderWrapper.BackLink>
      ) : (
        <HeaderWrapper.Logo fade isBlack={isBlack} to="/">
          <h1>Bilal El Kadhi</h1>
        </HeaderWrapper.Logo>
      )}
      {!isShy && (
        <HeaderWrapper.NavDesktop isBlack={isBlack}>
          <li>
            <AniLink fade activeClassName="active" to="/prints">
              Prints
            </AniLink>
          </li>
          <li>
            <AniLink fade activeClassName="active" to="/films">
              Films
            </AniLink>
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
