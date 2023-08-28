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

export default function Header() {
  return (
    <Container>
      <HeaderContainer>
        <Title>WeMovies</Title>
        <SectionContainer>
          <TextIcon>0 itens</TextIcon>
          <BagIconStyled />
        </SectionContainer>
      </HeaderContainer>
    </Container>
  );
}
