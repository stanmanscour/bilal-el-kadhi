import styled from 'styled-components'
import { Link } from 'gatsby'
import THEME from '../../../styles/theme'

const ViewAllWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 60px 0;

  @media ${THEME.TabletMin} {
  }
`

ViewAllWrapper.ItemLink = styled(Link)`
  picture,
  video {
    display: flex;
    height: 120px;
    width: auto;
  }

  @media ${THEME.TabletMin} {
    picture,
    video {
      height: 300px;
    }
  }
`

export default ViewAllWrapper
