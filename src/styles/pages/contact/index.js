import styled from 'styled-components'
import THEME from '../../theme'

const ContactWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  a {
    color: white;
    font-family: ${THEME.primaryFontFamily};
    font-weight: 400;
    text-decoration: underline;
    text-transform: uppercase;
    font-size: 13px;
    line-height: 13px;
    transition: color 0.3s ease-out;

    &:hover {
      color: #e0e0e0;
    }
  }

  @media ${THEME.TabletMin} {
    height: 100%;
    a {
      font-size: 16px;
      line-height: 16px;
    }
  }
`

export default ContactWrapper
