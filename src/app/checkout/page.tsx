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
import { useHandleItem } from "@/hooks/useHandleItem";

export default function Page() {
  const { dataCheckout } = useContext(InfoContext);

  const { handleDeleteItemCheckout } = useHandleItem();

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
                  <TrashSvgStyled
                    onClick={() => handleDeleteItemCheckout(movie)}
                  />
                </InfoCardCheckout>

                <InfoCardCheckout>
                  <Counter value={movie.count || 0} item={movie} />
                </InfoCardCheckout>
              </InfoCardContainer>
            </InnerCardCheckoutContainer>
          </CardContainerCheckout>
        );
      })}
    </Container>
  );
}
