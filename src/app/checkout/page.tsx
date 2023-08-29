"use client";

import { Container } from "@/components/Container";
import {
  CardCheckoutTitle,
  Card,
  Image,
  InnerCardCheckoutContainer,
  InfoCardCheckout,
  InfoCardText,
  TrashSvgStyled,
  InfoCardContainer,
  ValueContainer,
  TitleValue,
  Value,
  CardArea,
  OrderArea,
  DividerX,
  ScrollArea,
  TotalContainer,
} from "./style";
import { useContext } from "react";
import InfoContext from "@/context/InfoContext";
import Counter from "@/components/Counter";
import { useHandleItem } from "@/hooks/useHandleItem";
import { redirect } from "next/navigation";
import { PrimaryButton, TextButton } from "@/components/Button";

export default function Page() {
  const { dataCheckout } = useContext(InfoContext);
  const { handleDeleteItemCheckout } = useHandleItem();

  if (dataCheckout.length < 1) {
    return redirect("/");
  }

  let totalValue = 0;

  dataCheckout.forEach((item) => {
    const itemTotal = item.price * item.count;
    totalValue += itemTotal;
  });

  return (
    <Container>
      <CardArea>
        <ScrollArea>
          {dataCheckout?.map((movie, index) => {
            return (
              <Card key={index}>
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
                      <ValueContainer>
                        <TitleValue size="12">SUBTOTAL</TitleValue>
                        <Value size="16">
                          {(movie.price * movie.count).toLocaleString("pt-br", {
                            style: "currency",
                            currency: "BRL",
                          })}
                        </Value>
                      </ValueContainer>
                    </InfoCardCheckout>
                  </InfoCardContainer>
                </InnerCardCheckoutContainer>
              </Card>
            );
          })}
        </ScrollArea>
        <OrderArea>
          <DividerX />
          <TotalContainer>
            <TitleValue size="14">Total</TitleValue>
            <Value size="24">
              {totalValue.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </Value>
          </TotalContainer>
          <PrimaryButton>
            <TextButton fontWeight={700}>FINALIZAR PEDIDO</TextButton>
          </PrimaryButton>
        </OrderArea>
      </CardArea>
    </Container>
  );
}
