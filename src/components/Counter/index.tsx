import { PlusSvgStyled, MenusSvgStyled, SquareData, Container } from "./style";

interface ICounter {
  value: number;
}

export default function Counter({ value }: ICounter) {
  return (
    <Container>
      <MenusSvgStyled />
      <SquareData>{value}</SquareData>
      <PlusSvgStyled />
    </Container>
  );
}
