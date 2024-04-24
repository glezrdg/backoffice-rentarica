import { FC, ReactNode, createContext, useContext } from "react";

interface InitialProps {}

let initialState: InitialProps = {};

const CajaContext = createContext<InitialProps>(initialState);

interface CajaProviderProps {
  children: ReactNode;
}

export const CajaProvider: FC<CajaProviderProps> = ({ children }) => {
  return (
    <CajaContext.Provider value={{}}>{children}</CajaContext.Provider>
  );
};

export const useCajaState = () => {
  return useContext(CajaContext);
};

export default CajaProvider;