import styled from "styled-components"
import THEME from "../../styles/theme"

const LittlePlayerWrapper = styled.div`
  display: none;

  @media ${THEME.TabletMin} {
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    a {
      opacity: 0.8;
    }

    > div {
      height: 40%;
      width: auto;
    }
  }
`

const PlayerWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: block;
  position: relative;
`

PlayerWrapper.Controls = styled.div`
  box-sizing: border-box;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  border: 1px solid blue;
  height: 40px;
`

export { PlayerWrapper, LittlePlayerWrapper }
