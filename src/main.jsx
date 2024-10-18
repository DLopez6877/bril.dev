import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App';
import ErrorBoundary from './wrappers/ErrorBoundary';

import { HelmetProvider } from 'react-helmet-async';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </HelmetProvider>
  </StrictMode>
)
