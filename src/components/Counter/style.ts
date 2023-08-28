import { StyledSVGProps } from "@/@types/Svg";
import styled from "styled-components";

import MenusIcon from "../../assets/menusIcon.svg";
import PlusIcon from "../../assets/plusIcon.svg";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 11px;
`;
export const SquareData = styled.div`
  border-radius: 4px;
  width: 100%;
  max-height: 26px;
  max-width: 59px;
  border: 1px solid #d9d9d9;
  background: #fff;
  padding: 16px 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PlusSvgStyled = styled(PlusIcon)<StyledSVGProps>`
  cursor: pointer;
`;

export const MenusSvgStyled = styled(MenusIcon)<StyledSVGProps>`
  cursor: pointer;
`;
