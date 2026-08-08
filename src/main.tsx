// Ensure window.fetch is writable if polyfills or libraries attempt assignment
if (typeof window !== 'undefined') {
  try {
    const originalFetch = window.fetch ? window.fetch.bind(window) : undefined;
    let customFetch = originalFetch;
    try {
      Object.defineProperty(window, 'fetch', {
        get: () => customFetch || originalFetch,
        set: (fn) => {
          customFetch = fn;
        },
        configurable: true,
        enumerable: true,
      });
    } catch {
      // Safe fallback
    }
  } catch {
    // Safe fallback
  }
}

import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
