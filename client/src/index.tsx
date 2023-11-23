import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { LocaleProvider } from './hooks/useLocale';
import { ThemeProvider } from './hooks/useTheme';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <LocaleProvider>
        <App />
      </LocaleProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
