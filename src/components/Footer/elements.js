import styled from "styled-components"
import THEME from "../../styles/theme"

const FooterWrapper = styled.div`
  position: fixed;
  padding: 0;
  display: flex;
  justify-content: flex-end;
  width: calc(100% - 32px);
  position: fixed;
  left: 16px;
  bottom: 16px;
  box-sizing: border-box;
  @media ${THEME.TabletMin} {
    width: calc(100% - 48px);
    left: 24px;
    bottom: 24px;
  }
`

FooterWrapper.Text = styled.p`
  color: ${({ isBlack }) => (isBlack ? "white" : "black")};
  font-family: ${THEME.primaryFontFamily};
  font-weight: 400;
  text-decoration: none;
  font-size: 10px;
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
