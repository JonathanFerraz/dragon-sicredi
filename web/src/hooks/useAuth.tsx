import React, { createContext, useCallback, useState, useContext } from 'react';

import api from '../services/api';

interface User {
  id: string;
  name: string;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthDataState {
  user: User;
  token: string;
}

interface AuthContextState {
  user: User;
  signIn: (data: SignInCredentials) => Promise<void>;
  signOut: () => void;
  isAuthenticated: any;
}

const AuthContext = createContext<AuthContextState>({} as AuthContextState);

export const AuthProvider: React.FC = ({ children }) => {
  const [authData, setAuthData] = useState<AuthDataState>(() => {
    const user = localStorage.getItem('@Dragon/user');
    const token = localStorage.getItem('@Dragon/token');

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      return { token, user: JSON.parse(user) };
    }

    return {} as AuthDataState;
  });

  const signIn = useCallback(async ({ email, password }: SignInCredentials) => {
    const response = await api.post('/sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    api.defaults.headers.authorization = `Bearer ${token}`;

    localStorage.setItem('@Dragon/user', JSON.stringify(user));
    localStorage.setItem('@Dragon/token', token);

    setAuthData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@Dragon/user');
    localStorage.removeItem('@Dragon/token');

    api.defaults.headers.authorization = '';
    setAuthData({} as AuthDataState);
  }, []);

  const isAuthenticated = () => {
    const user = localStorage.getItem('@Dragon/user');
    const token = localStorage.getItem('@Dragon/token');

    if (user !== null || token !== null) {
      return true;
    }

    return false;
  };

  return (
    <AuthContext.Provider
      value={{
        user: authData.user,
        signIn,
        signOut,
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const authData = useContext(AuthContext);

  if (!authData) {
    throw new Error('Cannot use useAuth outside a AuthProvider');
  }

  return authData;
}

export default AuthProvider;
