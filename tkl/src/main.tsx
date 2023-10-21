import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

const mediumContainer = document.querySelector('.js-metabarLogoLeft');

const container = document.createElement('div');
container.id = 'tkl-container';
// document.body.appendChild(container);
mediumContainer?.parentElement?.appendChild(container);

ReactDOM.createRoot(container!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
