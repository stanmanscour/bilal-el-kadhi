import styled from "styled-components";
import { Link } from "gatsby";
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
  margin: 50px auto 0px auto;
  justify-content: space-between;

  @media ${THEME.TabletMin} {
    margin-top: 50px;
    margin-bottom: 100px;
  }

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

PrintsWrapper.ItemLink = styled(Link)`
  position: relative;
  display: block;
  background-color: black;

  img {
    position: absolute;
  }
`;

PrintsWrapper.Item = styled.li`
  ${props => `
    width: 100%;
    margin-bottom: 100px;
    
    @media ${THEME.TabletMin}{
      width: ${props.calculatedWidth};
      margin-bottom: 0;
    }
  `}
`;

export default PrintsWrapper;
