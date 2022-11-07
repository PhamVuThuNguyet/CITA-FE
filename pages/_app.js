import { ApolloProvider } from '@apollo/client';
import App from 'next/app';
import Layout from '../components/layout/layout';
import client from '../apollo-client';
import { GET_HEADER, GET_FOOTER, GET_BANNER, GET_SIDEBAR } from '../graphql/queries';
import '../styles/globals.css';

export default function MyApp({
  Component,
  pageProps,
  header,
  footer,
  banner,
  timeline
}) {
  return (
    <ApolloProvider client={client}>
      <Layout headerData={header} footerData={footer} bannerData={banner} timelineData={timeline}>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

MyApp.getInitialProps = async (ctx) => {
  const [header, footer, banner, timeline] = await Promise.allSettled([
    client.query({
      query: GET_HEADER,
    }),
    client.query({
      query: GET_FOOTER,
    }),
    client.query({
      query: GET_BANNER,
    }),
    client.query({
      query: GET_SIDEBAR,
    })
  ]);

  const appData = await App.getInitialProps(ctx);
  return {
    ...appData,
    header: header.value.data.allLayouts[0],
    footer: footer.value.data.allLayouts[0],
    banner: banner.value.data.allLayouts[0],
    timeline: timeline.value.data.allLayouts[0]
  };
};
