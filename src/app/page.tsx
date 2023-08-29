"use client";

import {
  CartIconStyled,
  PrimaryButton,
  TextButton,
  SectionButton,
} from "@/components/Button";
import {
  Container,
  GridContainer,
  GridItem,
  GridSection,
} from "@/components/Container";
import { useContext, useEffect, useState } from "react";
import { Image, Text } from "./style";
import { IMovies } from "@/@types/Movie";
import InfoContext from "@/context/InfoContext";
import { useHandleItem } from "@/hooks/useHandleItem";

export default function Home() {
  const [movies, setMovies] = useState<IMovies[] | null>(null);
  const { dataCheckout, setDataCheckout, counter, setCounter } =
    useContext(InfoContext);

  const { handleAddItemCheckout } = useHandleItem();

  function getData() {
    fetch("http://localhost:3000/api/movies")
      .then((resp) => resp.json())
      .then((data) => setMovies(data.products));
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <GridContainer>
        {movies?.map((movie) => {
          const countItem =
            dataCheckout.find((item) => item.id === movie.id)?.count || 0;

          return (
            <GridItem key={movie.id}>
              <GridSection>
                <Image src={movie.image} alt="capa do filme" />
                <Text size="12">{movie.title}</Text>
                <Text size="16">
                  {movie.price.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </Text>
              </GridSection>
              <PrimaryButton
                isActive={!!countItem || false}
                onClick={() => handleAddItemCheckout(movie)}
              >
                <SectionButton>
                  <CartIconStyled />
                  <TextButton fontWeight={400}>{countItem}</TextButton>
                </SectionButton>

                <TextButton fontWeight={700}>ADICIONAR AO CARRINHO</TextButton>
              </PrimaryButton>
            </GridItem>
          );
        })}
      </GridContainer>
    </Container>
  );
}
