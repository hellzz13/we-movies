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

export default function Home() {
  const [movies, setMovies] = useState<IMovies[] | null>(null);
  const { dataCheckout, setDataCheckout, counter, setCounter } =
    useContext(InfoContext);

  function getData() {
    fetch("http://localhost:3000/api/movies")
      .then((resp) => resp.json())
      .then((data) => setMovies(data.products));
  }

  useEffect(() => {
    getData();
  }, []);

  const handleAddItemCheckout = (movie: IMovies) => {
    const foundItem = dataCheckout.find((item) => item.id === movie.id);
    if (!foundItem) {
      setCounter(counter + 1);
      return setDataCheckout([...dataCheckout, { ...movie, count: 1 }]);
    }

    const oldCounter = foundItem.count;
    setCounter(counter + 1);
    return (foundItem.count = oldCounter + 1);
  };

  console.log("data atualizada", dataCheckout);

  return (
    <Container>
      <GridContainer>
        {movies?.map((movie) => {
          // const countItem = dataCheckout.count || 0;
          const countItem =
            dataCheckout.find((item) => item.id === movie.id)?.count || 0;

          return (
            <GridItem key={movie.id}>
              <GridSection>
                <Image src={movie.image} alt="capa do filme" />
                <Text>{movie.title}</Text>
                <Text money>
                  {movie.price.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </Text>
              </GridSection>
              <PrimaryButton
                isActive={!!countItem}
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
