import styled from "styled-components";

const LayoutWrapper = styled.div`
  background-color: ${({ isBlack }) => (isBlack ? "black" : "white")};
`;

export default LayoutWrapper;
