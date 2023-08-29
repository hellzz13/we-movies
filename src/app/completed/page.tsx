"use client";
import { useRouter } from "next/navigation";

import {
  ButtonContainer,
  PrimaryButton,
  TextButton,
} from "@/components/Button";
import {
  AreaButton,
  CompletedContainer,
  CompletedSvgStyled,
  CompletedTitle,
} from "./style";
import { Container } from "@/components/Container";
import { useContext } from "react";
import InfoContext from "@/context/InfoContext";
import Loading from "@/components/Loading";

export default function EmptyCart() {
  const { push } = useRouter();
  const { loading } = useContext(InfoContext);

  if (loading) {
    return <Loading />;
  }
  return (
    <Container>
      <CompletedContainer>
        <CompletedTitle>Compra realizada com sucesso!</CompletedTitle>
        <CompletedSvgStyled />

        <AreaButton>
          <ButtonContainer>
            <PrimaryButton onClick={() => push("/")}>
              <TextButton fontWeight={700}>Voltar</TextButton>
            </PrimaryButton>
          </ButtonContainer>
        </AreaButton>
      </CompletedContainer>
    </Container>
  );
}
