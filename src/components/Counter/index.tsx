import { useHandleItem } from "@/hooks/useHandleItem";
import { PlusSvgStyled, MenusSvgStyled, SquareData, Container } from "./style";
import { IMovies } from "@/@types/Movie";

interface ICounter {
  value: number;
  item: IMovies;
}

export default function Counter({ value, item }: ICounter) {
  const { handleAddItemCheckout, handleRemoveItemCheckout } = useHandleItem();
  return (
    <Container>
      <MenusSvgStyled onClick={() => handleRemoveItemCheckout(item)} />
      <SquareData>{value}</SquareData>
      <PlusSvgStyled onClick={() => handleAddItemCheckout(item)} />
    </Container>
  );
}
