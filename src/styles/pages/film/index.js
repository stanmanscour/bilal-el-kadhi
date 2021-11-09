import styled from "styled-components"
import { Link } from "gatsby"
import THEME from "../../theme"

const FilmWrapper = styled.div``

FilmWrapper.BackLink = styled(Link)`
  color: ${THEME.colors.grey};
  font-family: ${THEME.primaryFontFamily};
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 500;
  text-decoration: none;

  &:hover {
    color: white;
  }
`

export default FilmWrapper
