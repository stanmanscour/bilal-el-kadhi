import styled from "styled-components";
import THEME from "../../theme";

const FilmsWrapper = styled.div`
  background-color: black;
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
`;

FilmsWrapper.Item = styled.li`
  height: 75vh;
  background-size: cover;
  background-position: 50%;
  background-repeat: no-repeat;

  a {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    text-decoration: none;
    color: white;
  }

  &.active {
    h3 {
      color: white;
      font-style: italic;
    }
  }

  @media ${THEME.TabletMin} {
    background: transparent !important;
    height: initial;
    border: none;
    display: block;
    padding: 0;

    a {
      display: block;
      padding: 0;
      height: initial;
      width: initial;
    }
  }
`;

FilmsWrapper.Title = styled.h3`
  font-family: ${THEME.primaryFontFamily};
  font-size: 21px;
  color: white;
  line-height: 21px;
  text-transform: uppercase;

  @media ${THEME.TabletMin} {
    font-size: 35px;
    line-height: 40px;
    padding-left: 15px;
    color: ${THEME.colors.grey};

    &:hover {
      color: white;
      font-style: italic;
    }
  }
`;

FilmsWrapper.Collection = styled.ul`
  /* position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 40%;

   */
  @media ${THEME.TabletMin} {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 30%;
    min-width: 430px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export default FilmsWrapper;
