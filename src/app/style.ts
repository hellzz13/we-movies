import styled from "styled-components";

interface StyledText {
  size: string;
}

export const Image = styled.img`
  width: 147px;
  height: 188px;
`;

export const Text = styled.p<StyledText>`
  color: #333;
  background-color: "#fff";
  text-align: center;
  font-size: ${(props) => props.size + "px"};
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
