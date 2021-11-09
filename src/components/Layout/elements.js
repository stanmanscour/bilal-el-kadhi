import styled from "styled-components"
import THEME from "../../styles/theme"

const LayoutWrapper = styled.div`

  @media ${THEME.TabletMin} {
    width: 100vw;
    height: 100vh;
    background-color: ${({ isBlack }) => (isBlack ? "black" : "white")};
    display: flex;
    align-items: center;
    overflow: scroll;
  }
`

export default LayoutWrapper
