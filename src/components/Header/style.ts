import { SVGProps } from "react";
import styled from "styled-components";
import BagIconSvg from "../../assets/bagIcon.svg";

interface StyledSVGProps extends SVGProps<SVGSVGElement> {}

export const HeaderContainer = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 74px;
  width: 100%;
  padding: 18px 10px;
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  line-height: normal;
`;

export const SectionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const TextIcon = styled.p`
  color: #999;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const BagIconStyled = styled(BagIconSvg)<StyledSVGProps>`
  width: 31px;
  height: 32px;
`;
