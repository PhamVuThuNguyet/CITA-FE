import { ApolloProvider } from '@apollo/client';
import App from "next/app";
import client from '../apollo-client';
import Layout from '../components/layout/layout';
import { GET_HEADER, GET_FOOTER } from '../graphql/queries';  
import '../styles/globals.css';

export default function MyApp({ Component, pageProps, header, footer }) {
  return (
    <ApolloProvider client={client}>
      <Layout headerData={header} footerData={footer}>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

MyApp.getInitialProps = async (ctx) => {
  const [header, footer] = await Promise.allSettled([
    client.query({
      query: GET_HEADER,
    }),
    client.query({
      query: GET_FOOTER,
    })
  ]);

  const appData = await App.getInitialProps(ctx);
  return {
    ...appData,
    header: header.value.data.allLayouts[0],
    footer: footer.value.data.allLayouts[0]
  };
};