import styled from "styled-components";
import { Link } from "gatsby";
import THEME from "../../styles/theme";

const HeaderWrapper = styled.header`
  z-index: 5;
  position: fixed;
  top: 25px;
  left: 20px;
  right: 20px;
  display: flex;
  flex-direction: row;

  @media ${THEME.TabletMin} {
    top: 10px;
    left: 10px;
    right: 10px;
  }
`;

HeaderWrapper.Logo = styled(Link)`
  text-decoration: none;
  width: 150px;

  h1 {
    margin: 0;
    color: ${({ isBlack }) => (isBlack ? "white" : "black")};
    text-transform: uppercase;
    font-family: ${THEME.primaryFontFamily};
    font-size: 20px;
    font-weight: ${THEME.mediumFontWeight};
  }
`;

HeaderWrapper.NavDesktop = styled.ul`
  display: none;

  @media ${THEME.TabletMin} {
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
    padding-right: 150px;

    li {
      margin-right: 8px;
      margin-left: 8px;
    }

    a {
      font-family: ${THEME.primaryFontFamily};
      font-size: 19px;
      text-transform: uppercase;
      text-decoration: none;
      color: ${THEME.colors.grey};

      &:hover {
        color: ${({ isBlack }) => (isBlack ? "white" : "black")};
      }

      &.active {
        color: ${({ isBlack }) => (isBlack ? "white" : "black")};
        font-style: italic;
      }
    }
  }
`;

HeaderWrapper.MobileDesktop = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  margin-left: auto;

  svg {
    width: 25px;
    height: auto;
  }

  &:hover {
    cursor: pointer;
  }

  @media ${THEME.TabletMin} {
    display: none;
  }
`;

export default HeaderWrapper;
