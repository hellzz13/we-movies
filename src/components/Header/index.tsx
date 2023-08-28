"use client";

import styled from "styled-components";
import {
  BagIconStyled,
  HeaderContainer,
  TextIcon,
  Title,
  SectionContainer,
} from "./style";
import { Container } from "../Container";
import { useContext } from "react";
import InfoContext from "@/context/InfoContext";

export default function Header() {
  const { dataCheckout } = useContext(InfoContext);

  console.log(dataCheckout);
  return (
    <Container>
      <HeaderContainer>
        <Title>WeMovies</Title>
        <SectionContainer>
          <TextIcon>{dataCheckout?.length} itens</TextIcon>
          <BagIconStyled />
        </SectionContainer>
      </HeaderContainer>
    </Container>
  );
}
