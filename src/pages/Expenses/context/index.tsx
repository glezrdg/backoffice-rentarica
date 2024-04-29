import { FC, ReactNode, createContext, useContext } from "react";

interface InitialProps {}

let initialState: InitialProps = {};

const ExpensesContext = createContext<InitialProps>(initialState);

interface ExpensesProviderProps {
  children: ReactNode;
}

export const ExpensesProvider: FC<ExpensesProviderProps> = ({ children }) => {
  return (
    <ExpensesContext.Provider value={{}}>{children}</ExpensesContext.Provider>
  );
};

export const useExpensesState = () => {
  return useContext(ExpensesContext);
};

export default ExpensesProvider;