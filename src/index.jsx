import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { ColorNoteProvider } from './context/ColorNoteProvider';
import './index.css';

render(
  <React.StrictMode>
    <ColorNoteProvider>
      <App />
    </ColorNoteProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
