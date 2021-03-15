import styled from "styled-components";

export const ButtonStyle = styled.button`
  --ccc: lightgray;
  color: var(--ccc);
  text-align: center;
  background: transparent;
  border: 1px solid var(--ccc);
  padding: 0.9rem 2.3rem;
  margin: 3rem;

  border-radius: initial;
  :hover {
    transition: 0.3s linear;

    --ccc: white;
    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.5);
  }
`;
