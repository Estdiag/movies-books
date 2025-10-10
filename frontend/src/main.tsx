import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { client } from "./lib/apolloClient";
import { ApolloProvider } from '@apollo/client/react';
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
   <StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </StrictMode>,
)
