import { StyledSVGProps } from "@/@types/Svg";
import styled from "styled-components";

import TrashSvg from "../../assets/trashSvg.svg";

export const CardContainerCheckout = styled.div`
  background: #fff;
  width: 100%;
  display: flex;
  border-radius: 4px;
  flex: 1;
  padding: 16px;
  gap: 21px;
`;

export const InnerCardCheckoutContainer = styled.div`
  height: 90px;
  display: flex;
  gap: 16px;
`;

export const CardCheckoutTitle = styled.h2`
  color: #2f2e41;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const Image = styled.img`
  width: 64px;
  height: 82px;
`;

export const InfoCardCheckout = styled.div`
  max-width: 231px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 231px;
`;
export const InfoCardContainer = styled.div`
  max-width: 231px;
  display: flex;
  flex-direction: column;
  gap: 23px;
`;

export const InfoCardText = styled.p`
  color: #2f2e41;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const TrashSvgStyled = styled(TrashSvg)<StyledSVGProps>`
  cursor: pointer;
`;
