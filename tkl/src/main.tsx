import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

const heroTitle = document.querySelector('.hero-title.u-flex1');

if (!heroTitle?.parentElement?.parentElement) {
  throw new Error('No hero title found');
}

const container = document.createElement('div');
container.id = 'tkl-container';
heroTitle.parentElement.parentElement.appendChild(container);

ReactDOM.createRoot(container!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
