import { StyledSVGProps } from "@/@types/Svg";
import styled from "styled-components";

import CompletedIcon from "../../assets/completedIcon.svg";

export const CompletedContainer = styled.div`
  padding: 64px;
  background: #fff;
  border-radius: 4px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 32px;
`;

export const CompletedTitle = styled.h1`
  color: #2f2e41;
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding: 0px;
`;

export const CompletedSvgStyled = styled(CompletedIcon)<StyledSVGProps>`
  margin: auto;
  cursor: pointer;
  width: 295px;
  height: 307px;

  @media (max-width: 750px) {
    width: 100%;
    height: 100%;
  }
`;

export const AreaButton = styled.div`
  width: 235px;
`;
