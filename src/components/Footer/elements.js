import styled from "styled-components"
import THEME from "../../styles/theme"

const FooterWrapper = styled.div`
  position: fixed;
  bottom: 0;
  padding: 10vw;

  @media ${THEME.TabletMin} {
    padding: 0;
    display: block;
    position: fixed;
    left: 30px;
    bottom: 30px;
    box-sizing: border-box;
  }
`

FooterWrapper.Text = styled.p`
  color: ${({ isBlack }) => (isBlack ? "white" : "black")};
  font-family: ${THEME.primaryFontFamily};
  font-weight: 400;
  text-decoration: none;
  font-size: 8px;
  line-height: 12px;
  @media ${THEME.TabletMin} {
    font-size: 12px;
    line-height: 18px;
  }
`

FooterWrapper.ContactLink = styled.a`
  color: ${({ isBlack }) => (isBlack ? "white" : "black")};
  font-family: ${THEME.primaryFontFamily};
  font-weight: 400;
  text-decoration: underline;
  font-size: 8px;
  line-height: 12px;
  @media ${THEME.TabletMin} {
    font-size: 12px;
    line-height: 18px;
  }
`

export default FooterWrapper
