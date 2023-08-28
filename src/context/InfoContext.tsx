"use client";
import { IMovies } from "@/@types/Movie";
import { createContext, useState } from "react";

type InfoProps = {
  dataCheckout: IMovies[];
  setDataCheckout: (state: IMovies[]) => void;
};

const DEFAULT_VALUE = {
  dataCheckout: [],
  setDataCheckout: () => {},
};

const InfoContext = createContext<InfoProps>(DEFAULT_VALUE);

interface IProvider {
  children: React.ReactNode;
}

const InfoContextProvider: React.FC<IProvider> = ({ children }) => {
  const [dataCheckout, setDataCheckout] = useState<IMovies[]>(
    DEFAULT_VALUE.dataCheckout
  );

  return (
    <InfoContext.Provider
      value={{
        dataCheckout,
        setDataCheckout,
      }}
    >
      {children}
    </InfoContext.Provider>
  );
};

export { InfoContextProvider };
export default InfoContext;
