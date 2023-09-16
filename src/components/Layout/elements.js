import styled from "styled-components"
import THEME from "../../styles/theme"

const LayoutWrapper = styled.div`
  position: relative;
  min-height: 100vh;

  .password {
    position: fixed;
    width: 100vw;
    height: 100vh;
    background: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .password.not-active {
    display: none;
  }

  h2 {
    font-family: 'Arial';
    text-transform: uppercase;
    color: white;
  }

  form {
    display: flex;
    align-items: center;
  }

  input {
    width: 200px;
    height: 30px;
    margin: 30px 0;
    padding: 0;
    border: 0;
  }

  button {
    height: 30px;
    padding: 0 10px;
    border: 0;
    font-family: 'Arial';
    text-transform: uppercase;
    cursor: pointer;
  }

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
