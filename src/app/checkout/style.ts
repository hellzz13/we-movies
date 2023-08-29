import { StyledSVGProps } from "@/@types/Svg";
import styled from "styled-components";

import TrashSvg from "../../assets/trashSvg.svg";

interface ITextProps {
  size: string;
}

export const CardArea = styled.div`
  background: #fff;
  border-radius: 4px;

  position: relative;
  @media (max-width: 750px) {
    height: 85vh;
  }
`;

export const TitleTableCard = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 24px;

  @media (max-width: 760px) {
    display: none;
  }
`;

export const TextTitleTableCard = styled.div`
  color: #999;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const ScrollArea = styled.div`
  height: 73%;
  overflow-y: auto;
`;

export const Card = styled.div`
  width: 100%;
  display: flex;
  padding: 24px;
  gap: 21px;

  @media (max-width: 760px) {
    padding: 16px;
  }
`;

export const InnerCardCheckoutContainer = styled.div`
  height: 90px;
  display: flex;
  gap: 52px;
  width: 100%;

  @media (max-width: 760px) {
    gap: 16px;
  }
`;

export const CardCheckoutTitle = styled.h2`
  color: #2f2e41;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const AreaValueItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (max-width: 760px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Image = styled.img`
  width: 89px;
  height: 114px;

  @media (max-width: 750px) {
    width: 64px;
    height: 82px;
  }
`;

export const InfoSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 52px;

  @media (max-width: 760px) {
    flex-direction: column;
    gap: 18px;
  }
`;

export const InfoCardCheckout = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 52px;

  @media (max-width: 760px) {
    gap: 0px;
  }
`;
export const InfoCardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 52px;

  @media (max-width: 760px) {
    width: 40%;
    flex-direction: column-reverse;
    align-items: end;
    gap: 18px;
  }
`;

export const TitleValue = styled.p<ITextProps>`
  display: none;

  @media (max-width: 760px) {
    color: #999;
    font-size: ${(props) => props.size}px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    display: block;
  }
`;

export const TitleValueTotal = styled.p<ITextProps>`
  font-size: ${(props) => props.size}px;
  color: #999;
  text-align: center;
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
  background-color: #fff;
`;

export const DividerX = styled.div`
  margin: 21px 0;
  width: 100%;
  background: #999;
  height: 1px;
`;

export const TotalWrapper = styled.span`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  @media (max-width: 760px) {
    flex-direction: column;
  }
`;

export const TotalContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  justify-content: right;
`;

export const Spacer = styled.div`
  height: 140px;
  margin-bottom: 24px;

  @media (max-width: 750px) {
    height: 0px;
    margin-bottom: 0px;
  }
`;
