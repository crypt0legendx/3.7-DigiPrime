import * as React from 'react';
import { API_BASE_URL } from 'settings';

interface IContextProps {
  authenticated: boolean;
}

export const AuthContext = React.createContext({} as IContextProps);

export default ({ children }) => {

  const defaultContext = {
  };
  return (
        <AuthContext.Provider value={defaultContext}>
          {children}
        </AuthContext.Provider>
  );
};
