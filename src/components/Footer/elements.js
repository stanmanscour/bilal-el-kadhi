import styled from "styled-components";
import THEME from "../../styles/theme";

const FooterWrapper = styled.div`
  display: none;

  @media ${THEME.TabletMin} {
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100vw;
    box-sizing: border-box;
    color: white;
    text-align: center;
    padding-bottom: 12px;
    font-family: ${THEME.primaryFontFamily};
    font-size: 16px;
  }
`;

export default FooterWrapper;
