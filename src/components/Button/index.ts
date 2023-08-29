import styled from "styled-components";
import { shade } from "polished";

import CartIcon from "../../assets/cartIcon.svg";
import { StyledSVGProps } from "@/@types/Svg";

interface ButtonPropsText {
  fontWeight: number;
}

interface ButtonProps {
  isActive?: boolean;
}

export const PrimaryButton = styled.a<ButtonProps>`
  display: flex;
  padding: 0.5rem 0;
  margin: 0.5rem 0;
  height: 3rem;
  width: 100%;
  color: white;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  background: ${(props) => (props.isActive ? "#039B00" : "#009edd")};
  transition: color 0.2;
  cursor: pointer;
  &:hover {
    background: ${(props) =>
      props.isActive ? shade(0.3, "#039B00") : shade(0.3, "#009edd")};
  }
`;

export const ButtonContainer = styled.div`
  width: 235px;

  @media (max-width: 750px) {
    width: 100%;
  }
`;

export const TextButton = styled.p<ButtonPropsText>`
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: ${(props) => props.fontWeight};
  line-height: normal;
`;
export const SectionButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
`;

export const CartIconStyled = styled(CartIcon)<StyledSVGProps>``;
