import { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import createApolloClient from '../lib/apolloClient';

const client = createApolloClient(); // Ensure this is properly set up

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
