import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Optional: for global styles

// This finds the root element in public/index.html
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render your App inside the root div
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
