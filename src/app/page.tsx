"use client";

import { PrimaryButton } from "@/components/Button";
import { Container, GridContainer, GridItem } from "@/components/Container";
import { useEffect, useState } from "react";
import { Image, Text } from "./style";
import { IMovies } from "@/@types/Movie";

export default function Home() {
  const [movies, setMovies] = useState<IMovies[] | null>(null);

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
        {movies?.map((movie) => (
          <GridItem key={movie.id}>
            <Image src={movie.image} alt="capa do filme" />
            <Text>{movie.title}</Text>
            <Text money>
              {movie.price.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </Text>
            <PrimaryButton>ADICIONAR AO CARRINHO</PrimaryButton>
          </GridItem>
        ))}
      </GridContainer>
    </Container>
  );
}
