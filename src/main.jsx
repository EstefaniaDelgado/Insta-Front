import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { InstaContextProvider } from './context/InstaContext.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <InstaContextProvider>
    <App />
    </InstaContextProvider>
  </React.StrictMode>
);
