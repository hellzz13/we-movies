"use client";

import { Container } from "@/components/Container";
import {
  CardCheckoutTitle,
  CardContainerCheckout,
  Image,
  InnerCardCheckoutContainer,
  InfoCardCheckout,
  InfoCardText,
  TrashSvgStyled,
  InfoCardContainer,
} from "./style";
import { useContext } from "react";
import InfoContext from "@/context/InfoContext";
import Counter from "@/components/Counter";

export default function Page() {
  const { dataCheckout } = useContext(InfoContext);

  return (
    <Container>
      {dataCheckout?.map((movie, index) => {
        return (
          <CardContainerCheckout key={index}>
            <InnerCardCheckoutContainer>
              <Image src={movie.image} alt="capa do filme" />
              <InfoCardContainer>
                <InfoCardCheckout>
                  <CardCheckoutTitle>{movie.title}</CardCheckoutTitle>
                  <InfoCardText>
                    {movie.price.toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </InfoCardText>
                  <TrashSvgStyled />
                </InfoCardCheckout>

                <InfoCardCheckout>
                  <Counter value={movie.count || 0} />
                </InfoCardCheckout>
              </InfoCardContainer>
            </InnerCardCheckoutContainer>
          </CardContainerCheckout>
        );
      })}
    </Container>
  );
}
