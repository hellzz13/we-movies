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
  AreaValueItem,
  InfoSection,
  TitleValueTotal,
  TotalWrapper,
  TitleTableCard,
  TextTitleTableCard,
  Spacer,
} from "./style";
import { useContext } from "react";
import InfoContext from "@/context/InfoContext";
import Counter from "@/components/Counter";
import { useHandleItem } from "@/hooks/useHandleItem";
import { redirect, useRouter } from "next/navigation";
import {
  ButtonContainer,
  PrimaryButton,
  TextButton,
} from "@/components/Button";
import EmptyCart from "@/components/EmptyCart";
import Loading from "@/components/Loading";

export default function Page() {
  const { dataCheckout, setDataCheckout, setCounter, setLoading, loading } =
    useContext(InfoContext);
  const { handleDeleteItemCheckout } = useHandleItem();

  const { push } = useRouter();

  let totalValue = 0;

  dataCheckout.forEach((item) => {
    const itemTotal = item.price * item.count;
    totalValue += itemTotal;
  });

  function handleCompleteCheckout() {
    setLoading(true);
    push("/completed");
    setDataCheckout([]);
    setCounter(0);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <Container>
      {dataCheckout.length > 0 ? (
        <CardArea>
          <ScrollArea>
            <TitleTableCard>
              <TextTitleTableCard>PRODUTO</TextTitleTableCard>
              <TextTitleTableCard>QTD</TextTitleTableCard>
              <TextTitleTableCard>SUBTOTAL</TextTitleTableCard>
            </TitleTableCard>
            {dataCheckout?.map((movie, index) => {
              return (
                <Card key={index}>
                  <InnerCardCheckoutContainer>
                    <Image src={movie.image} alt="capa do filme" />
                    <InfoCardContainer>
                      <InfoCardCheckout>
                        <InfoSection>
                          <AreaValueItem>
                            <CardCheckoutTitle>{movie.title}</CardCheckoutTitle>
                            <InfoCardText>
                              {movie.price.toLocaleString("pt-br", {
                                style: "currency",
                                currency: "BRL",
                              })}
                            </InfoCardText>
                          </AreaValueItem>
                          <Counter value={movie.count || 0} item={movie} />
                        </InfoSection>
                        <ValueContainer>
                          <div>
                            <TitleValue size="12">SUBTOTAL</TitleValue>
                            <Value size="16">
                              {(movie.price * movie.count).toLocaleString(
                                "pt-br",
                                {
                                  style: "currency",
                                  currency: "BRL",
                                }
                              )}
                            </Value>
                          </div>
                          <TrashSvgStyled
                            onClick={() => handleDeleteItemCheckout(movie)}
                          />
                        </ValueContainer>
                      </InfoCardCheckout>
                    </InfoCardContainer>
                  </InnerCardCheckoutContainer>
                </Card>
              );
            })}
          </ScrollArea>
          <Spacer />
          <OrderArea>
            <DividerX />

            <TotalWrapper>
              <TotalContainer>
                <TitleValueTotal size="14">TOTAL</TitleValueTotal>
                <Value size="24">
                  {totalValue.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </Value>
              </TotalContainer>
              <ButtonContainer>
                <PrimaryButton onClick={handleCompleteCheckout}>
                  <TextButton fontWeight={700}>FINALIZAR PEDIDO</TextButton>
                </PrimaryButton>
              </ButtonContainer>
            </TotalWrapper>
          </OrderArea>
        </CardArea>
      ) : (
        <Container>
          <CardArea>
            <EmptyCart />
          </CardArea>
        </Container>
      )}
    </Container>
  );
}
