import styled from 'styled-components'
import { Link } from 'gatsby'
import THEME from '../../../styles/theme'

const ViewAllWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media ${THEME.TabletMin} {
  }
`

ViewAllWrapper.ItemLink = styled(Link)`
  height: 200px;
  width: 100%;
  picture,
  video {
    height: 100%;
    width: 100%;
  }

  @media ${THEME.TabletMin} {
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    picture,
    video {
      height: 100%;
      width: auto;
    }
  }
`

export default ViewAllWrapper
