import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
const cache = new InMemoryCache()
export const apolloClient = new ApolloClient({
  cache,
  uri: import.meta.env.VITE_GRAPHQL_SERVER
})
createRoot(document.getElementById('root')!).render(
  <ApolloProvider client={apolloClient} >
    <App />
  </ApolloProvider>
)
