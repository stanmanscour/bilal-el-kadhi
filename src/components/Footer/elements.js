import styled from "styled-components";
import THEME from "../../styles/theme";

const FooterWrapper = styled.div`
  /* display: flex;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${THEME.TabletMin} { */
    display: block;
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100vw;
    box-sizing: border-box;
    text-align: center;
    padding-bottom: 12px;
  /* } */
`;

FooterWrapper.ContactLink = styled.a`
  color: ${({ isBlack }) => (isBlack ? "white" : "black")};
  font-family: ${THEME.primaryFontFamily};
  font-weight: 600;
  text-decoration: none;
  font-size: 14px;
`;

export default FooterWrapper;
