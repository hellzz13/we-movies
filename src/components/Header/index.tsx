"use client";

import {
  BagIconStyled,
  HeaderContainer,
  TextIcon,
  Title,
  SectionContainer,
  Text,
  TextConteiner,
} from "./style";
import { Container } from "../Container";
import { useContext } from "react";
import InfoContext from "@/context/InfoContext";
import Link from "next/link";

export default function Header() {
  const { counter } = useContext(InfoContext);

  return (
    <Container>
      <HeaderContainer>
        <Link href="/">
          <Title>WeMovies</Title>
        </Link>
        <SectionContainer>
          <TextConteiner>
            <Text>Meu Carrinho</Text>
            <TextIcon>{counter || 0} itens</TextIcon>
          </TextConteiner>

          <Link href="/checkout">
            <BagIconStyled />
          </Link>
        </SectionContainer>
      </HeaderContainer>
    </Container>
  );
}
