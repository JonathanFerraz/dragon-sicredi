import React from 'react';

import { ThemeProvider } from 'styled-components';

import defaultTheme from '../styles/themes/defaultTheme';
import { ToastProvider } from './toast';
import AuthProvider from './useAuth';

const RootProvider: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ToastProvider>
        <AuthProvider>{children}</AuthProvider>
      </ToastProvider>
    </ThemeProvider>
  );
};

export default RootProvider;
