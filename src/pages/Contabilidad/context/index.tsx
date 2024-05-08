import { FC, ReactNode, createContext, useContext } from "react";

interface InitialProps {}

let initialState: InitialProps = {};

const ContabilidadContext = createContext<InitialProps>(initialState);

interface ContabilidadProviderProps {
  children: ReactNode;
}

export const ContabilidadProvider: FC<ContabilidadProviderProps> = ({ children }) => {
  return (
    <ContabilidadContext.Provider value={{}}>{children}</ContabilidadContext.Provider>
  );
};

export const useContabilidadState = () => {
  return useContext(ContabilidadContext);
};

export default ContabilidadProvider;