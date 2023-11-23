import styled from 'styled-components'
import { Link } from 'gatsby'
import THEME from '../../../styles/theme'

const ViewAllWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 100px 0;

  @media ${THEME.TabletMin} {
    gap: 20px;  
    &:after {
      content: "";
      flex: auto;
    }
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
      height: 250px;
    }

    video {
      min-width: 400px;
    }
  }
`

export default ViewAllWrapper
