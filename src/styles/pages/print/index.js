import styled from "styled-components"
import THEME from "../../theme"
import { Link } from "gatsby"

const PrintWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100vw;
    height: auto;
    max-height: 100vh;

    @media ${THEME.TabletMin} {
      height: 100vh;
    }
  }
`

PrintWrapper.BackLink = styled(Link)`
  color: ${THEME.colors.grey};
  font-family: ${THEME.primaryFontFamily};
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 500;
  text-decoration: none;

  &:hover {
    color: black;
  }
`

PrintWrapper.Title = styled.h2`
  /* font-size: 16px;
  position: absolute;
  left: */
`

export default PrintWrapper
