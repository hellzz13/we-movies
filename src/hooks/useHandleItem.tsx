import { IMovies } from "@/@types/Movie";
import InfoContext from "@/context/InfoContext";
import { useContext } from "react";

export function useHandleItem() {
  const { dataCheckout, setDataCheckout, counter, setCounter } =
    useContext(InfoContext);

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

  const handleDeleteItemCheckout = (movie: IMovies) => {
    const foundItem = dataCheckout.find((item) => item.id === movie.id);

    if (foundItem) {
      const filteredItems = dataCheckout.filter(
        (item) => item.id !== foundItem.id
      );
      setCounter(counter - foundItem.count);
      setDataCheckout(filteredItems);
    }
  };

  const handleRemoveItemCheckout = (movie: IMovies) => {
    const foundItem = dataCheckout.find((item) => item.id === movie.id);
    if (!foundItem) {
      setCounter(counter - 1);
      return setDataCheckout([...dataCheckout, { ...movie, count: 1 }]);
    }

    if (foundItem.count <= 1) {
      handleDeleteItemCheckout(foundItem);
    }
    const oldCounter = foundItem.count;
    setCounter(counter - 1);
    return (foundItem.count = oldCounter - 1);
  };

  return {
    handleAddItemCheckout,
    handleRemoveItemCheckout,
    handleDeleteItemCheckout,
  };
}
