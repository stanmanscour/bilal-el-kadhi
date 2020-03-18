import styled from "styled-components";
import THEME from "../../theme";

const PrintsWrapper = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;
`;

PrintsWrapper.Collection = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

PrintsWrapper.NewCollection = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 80%;
  margin: 0px auto 100px auto;
  /* margin-bottom: 50px; */
  justify-content: space-between;

  li {
    /* padding: 20px; */
    /* margin-bottom: 40px; */
    box-sizing: border-box;
    img {
      /* margin: 20px; */
      box-sizing: border-box;
      width: 100%;
    }
  }
`;

PrintsWrapper.ItemName = styled.h3`
  color: black;
  margin-top: 8px;
  text-transform: uppercase;
  font-family: ${THEME.primaryFontFamily};
  font-weight: ${THEME.mediumFontWeight};
  font-size: 16px;

  @media ${THEME.TabletMin} {
    font-size: 20px;
  }
`;

PrintsWrapper.Item = styled.li`
  position: relative;
  max-width: 100%;
  margin: 15px;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${THEME.TabletMin} {
    width: 45%;
    box-sizing: border-box;
  }

  @media ${THEME.DesktopMin} {
    width: 25%;
  }

  a {
    text-decoration: none;
  }

  &:hover {
    h3 {
      opacity: 1;
    }
  }

  img {
    max-width: 100%;
  }
`;

export default PrintsWrapper;
