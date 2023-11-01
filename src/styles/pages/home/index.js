import styled from "styled-components"
import { Link } from "gatsby"
import THEME from "../../../styles/theme"

const IndexWrapper = styled.div`
  flex-direction: column;
  display: flex;
  width: 100vw;
  height: auto;
  justify-content: center;
  align-items: center;
  padding: 5vw 0;
  div, video, img {
    width: 100% !important;
    height: auto !important;
  }

  @media ${THEME.TabletMin} {
    display: flex;
    flex-direction: row;
    width: auto;
    height: 60vh !important;
    align-items: center;
    padding-left: 20vw;
    div, video, img {
      height: 100% !important;
      min-width: auto;
      width: auto !important;
    }
  }
`

IndexWrapper.ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: 50%;
`

IndexWrapper.ItemLink = styled(Link)`
  display: flex;
  width: 70%;
  padding: 5vw 0;
  picture, video {
    width: 80%;
    height: auto;
  }
  img {
    width: 100%;
  }

  @media ${THEME.TabletMin} {
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    picture, video {
      height: 100%;
      width: auto;
    }
  }
`

export default IndexWrapper
