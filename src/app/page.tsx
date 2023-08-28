"use client";

import { PrimaryButton } from "@/components/Button";
import { Container } from "@/components/Container";
import { useEffect } from "react";

export default function Home() {
  function getData() {
    fetch("http://localhost:3000/api/movies")
      .then((resp) => resp.json())
      .then((products) => console.log(products));
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <PrimaryButton>teste</PrimaryButton>
    </Container>
  );
}
