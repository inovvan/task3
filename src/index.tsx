import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './assets/styles/variables.scss';
import './index.scss'
import { App } from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)