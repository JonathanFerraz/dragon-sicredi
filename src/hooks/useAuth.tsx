import React, { createContext, useCallback, useState, useContext } from 'react';

import { authSingIn } from '../mocks/auth';
import api from '../services/api';
import { useToast } from './toast';

interface User {
  id: string;
  name: string;
  lastName: string;
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
  signed: boolean;
  user: User;
  signIn: (data: SignInCredentials) => Promise<void>;
  signOut: () => void;
  isAuthenticated: any;
}

const AuthContext = createContext<AuthContextState>({} as AuthContextState);

export const AuthProvider: React.FC = ({ children }) => {
  const { addToast } = useToast();

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
    // const response = await api.post('/sessions', {
    //   email,
    //   password,
    // });

    const response = (await authSingIn(email, password)) as any;

    const { token, user } = response.data;

    if (!response.data.error) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      localStorage.setItem('@Dragon/user', JSON.stringify(user));
      localStorage.setItem('@Dragon/sessionToken', token);

      addToast({
        title: 'Login realizado com sucesso!',
        type: 'success',
      });

      setAuthData({ token, user });
    } else {
      addToast({
        title: 'Algo deu errado',
        description:
          'Algo deu errado durante o login, cheque suas credenciais e tente novamente',
        type: 'error',
      });
    }

    return response.data;
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@Dragon/user');
    localStorage.removeItem('@Dragon/sessionToken');

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
        signed: Boolean(authData.user),
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
