import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalProvider } from '@/providers/GlobalProvider';
import '@/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalProvider />
  </React.StrictMode>,
);
