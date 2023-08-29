"use client";
import { useRouter } from "next/navigation";
import { ButtonContainer, PrimaryButton, TextButton } from "../Button";
import { Container, EmptySvgStyled, EmptyTitle, AreaButton } from "./style";

export default function EmptyCart() {
  const { push } = useRouter();
  return (
    <Container>
      <EmptyTitle>{"Parece que não há nada por aqui :("}</EmptyTitle>
      <EmptySvgStyled />

      <AreaButton>
        <ButtonContainer>
          <PrimaryButton onClick={() => push("/")}>
            <TextButton fontWeight={700}>Voltar</TextButton>
          </PrimaryButton>
        </ButtonContainer>
      </AreaButton>
    </Container>
  );
}
