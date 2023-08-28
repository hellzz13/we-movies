import styled from "styled-components";
import { shade } from "polished";

export const PrimaryButton = styled.a`
  display: flex;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  height: 3rem;
  width: 11rem;
  color: white;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  background: #009edd;
  transition: color 0.2;
  cursor: pointer;

  &:hover {
    background: ${shade(0.3, "#009edd")};
  }
`;
