import styled from "styled-components";
import { shade } from "polished";

export const PrimaryButton = styled.a`
  display: flex;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  height: 3rem;
  width: 100%;
  color: white;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  background: #009edd;
  transition: color 0.2;
  cursor: pointer;

  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  &:hover {
    background: ${shade(0.3, "#009edd")};
  }
`;
