import { StyledSVGProps } from "@/@types/Svg";
import styled from "styled-components";

import TrashSvg from "../../assets/trashSvg.svg";

interface ITextProps {
  size: string;
}

export const CardArea = styled.div`
  background: #fff;
  border-radius: 4px;
  height: 85vh;
  position: relative;
`;
export const ScrollArea = styled.div`
  height: 80%;
  overflow-y: auto;
`;

export const Card = styled.div`
  width: 100%;
  display: flex;
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

export const ValueContainer = styled.div`
  width: 100%;
  text-align: right;
`;

export const TitleValue = styled.p<ITextProps>`
  color: #999;
  font-size: ${(props) => props.size}px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const Value = styled.p<ITextProps>`
  color: #2f2e41;
  font-size: ${(props) => props.size}px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const OrderArea = styled.div`
  position: absolute;
  padding: 16px;
  width: 100%;
  bottom: 0;
`;

export const DividerX = styled.hr`
  margin: 21px 0;
  width: 100%;
  fill: #999;
`;

export const TotalContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  justify-content: right;
`;
