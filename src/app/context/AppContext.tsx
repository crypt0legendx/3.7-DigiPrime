import * as React from 'react';

interface IContextProps {
}

export const AppContext = React.createContext({} as IContextProps);

export const AppContextProvider = ({ children }) => {

  const defaultContext = {
  };

  return (
    <AppContext.Provider value={defaultContext}>
      {children}
    </AppContext.Provider>
  );
};
