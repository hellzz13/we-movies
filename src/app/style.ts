import styled from "styled-components";

interface StyledText {
  money?: boolean;
}

export const Image = styled.img`
  width: 147px;
  height: 188px;
`;

export const Text = styled.p<StyledText>`
  color: #333;
  background-color: "#fff";
  text-align: center;
  font-size: ${(props) => (props.money ? "16px" : "12px")};
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
