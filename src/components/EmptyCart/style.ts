import { StyledSVGProps } from "@/@types/Svg";
import styled from "styled-components";

import EmptyIcon from "../../assets/emptyIcon.svg";

export const Container = styled.div`
  padding: 64px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 32px;
  @media (max-width: 750px) {
    padding: 0px;
  }
`;

export const EmptyTitle = styled.h1`
  color: #2f2e41;
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding: 0px;

  @media (max-width: 750px) {
    padding: 64px;
  }
`;

export const EmptySvgStyled = styled(EmptyIcon)<StyledSVGProps>`
  margin: auto;
  cursor: pointer;
  height: 100%;
`;

export const AreaButton = styled.div`
  width: 235px;
`;
