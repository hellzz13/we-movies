"use client";
import { IMovies } from "@/@types/Movie";
import { createContext, useState } from "react";

type InfoProps = {
  dataCheckout: IMovies[];
  setDataCheckout: (state: IMovies[]) => void;
  counter: number;
  setCounter: (state: number) => void;
};

const DEFAULT_VALUE = {
  dataCheckout: [],
  setDataCheckout: () => {},
  counter: 0,
  setCounter: () => {},
};

const InfoContext = createContext<InfoProps>(DEFAULT_VALUE);

interface IProvider {
  children: React.ReactNode;
}

const InfoContextProvider: React.FC<IProvider> = ({ children }) => {
  const [dataCheckout, setDataCheckout] = useState<IMovies[]>(
    DEFAULT_VALUE.dataCheckout
  );
  const [counter, setCounter] = useState(DEFAULT_VALUE.counter);

  return (
    <InfoContext.Provider
      value={{
        dataCheckout,
        setDataCheckout,
        counter,
        setCounter,
      }}
    >
      {children}
    </InfoContext.Provider>
  );
};

export { InfoContextProvider };
export default InfoContext;
