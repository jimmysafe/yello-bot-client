import "../styles/index.css";
import type { AppProps } from 'next/app';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Layout from "../components/Layout";


const client = new ApolloClient({
  uri: process.env.NODE_ENV === 'development' ? 'http://localhost:5000/graphql' : 'https://api.yellobot.me/graphql',
  credentials: 'include',
  cache: new InMemoryCache()
});

const MyApp = ({ Component, pageProps }: AppProps)  => {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  )
}


export default MyApp
