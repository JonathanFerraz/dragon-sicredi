import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import RootProvider from './hooks';
import Routes from './routes';
import GlobalStyles from './styles/GlobalStyles';

const App: React.FC = () => (
  <RootProvider>
    <GlobalStyles />
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </RootProvider>
);

export default App;
