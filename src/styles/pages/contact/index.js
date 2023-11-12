import styled from "styled-components"
import THEME from "../../theme"

const ContactWrapper = styled.div` 
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  a {
    color: black;
    font-family: ${THEME.primaryFontFamily};
    font-weight: 400;
    text-decoration: none;
    font-size: 8px;
    line-height: 12px;
  }

  @media ${THEME.TabletMin} {
    height: 100%;
    a {
      font-size: 12px;
      line-height: 18px;
    }
  }
`

export default ContactWrapper
