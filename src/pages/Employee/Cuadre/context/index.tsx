import { FC, ReactNode, createContext, useContext } from "react";

interface InitialProps {}

let initialState: InitialProps = {};

const CuadreContext = createContext<InitialProps>(initialState);

interface CuadreProviderProps {
  children: ReactNode;
}

export const CuadreProvider: FC<CuadreProviderProps> = ({ children }) => {
  return (
    <CuadreContext.Provider value={{}}>{children}</CuadreContext.Provider>
  );
};

export const useCuadreState = () => {
  return useContext(CuadreContext);
};

export default CuadreProvider;