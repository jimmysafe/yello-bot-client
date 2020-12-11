import "../styles/index.css";
import type { AppProps } from 'next/app';
import { ApolloClient, InMemoryCache, ApolloProvider,createHttpLink } from '@apollo/client';
import Layout from "../components/Layout";
import { setContext } from '@apollo/client/link/context';
import Cookies from 'js-cookie'

const httpLink = createHttpLink({
  uri: 'http://localhost:5000/graphql'
});

const authLink = setContext((_, { headers }) => {
  const accessToken = Cookies.get('accessToken')
  const expiry = Cookies.get('expiry')
  const userid = Cookies.get('userid')
  return {
    headers: {
      ...headers,
      authorization: accessToken ? `Bearer ${accessToken}` : "",
      expiry,
      userid
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
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
