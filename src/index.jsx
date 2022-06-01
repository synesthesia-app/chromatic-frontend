import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { ColorNoteProvider } from './context/ColorNoteProvider';
import { UserProvider } from './context/UserProvider';
import './index.css';

render(
  <React.StrictMode>
    <UserProvider>
      <ColorNoteProvider>
        <App />
      </ColorNoteProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
