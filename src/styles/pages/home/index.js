import styled from "styled-components";

const IndexWrapper = styled.div`
  div {
    width: 100vw !important;
    height: 100vh !important;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    video {
      height: 100vh !important;
      min-width: 100vh !important;
      width: auto !important;
    }
  }
`;

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
`;

export default IndexWrapper;
