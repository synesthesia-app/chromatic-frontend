import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { ToneProvider } from './context/ToneProvider';

render(
  <React.StrictMode>
    <ToneProvider>
      <App />
    </ToneProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
