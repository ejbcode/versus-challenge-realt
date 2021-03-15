import styled from "styled-components";

export const SelectedProductStyle = styled.div`
  position: absolute;
  z-index: 0;
  top: 20%;
  ${(props) => props.position};
  width: 200px;
  img {
    margin-top: 2rem;
    opacity: 0.5;
    width: 150px;
  }
`;
