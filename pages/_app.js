import { ApolloProvider } from '@apollo/client';
import App from 'next/app';
import Layout from '../components/layout/layout';
import client from '../apollo-client';
import { GET_HEADER, GET_FOOTER, GET_BANNER, GET_SIDEBAR, GET_ORGANIZER } from '../graphql/queries';
import '../styles/globals.css';

export default function MyApp({
  Component,
  pageProps,
  header,
  footer,
  banner,
  sidebar,
  organizer
}) {
  return (
    <ApolloProvider client={client}>
      <Layout headerData={header} footerData={footer} bannerData={banner} timelineData={sidebar} organizer={organizer}>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

MyApp.getInitialProps = async (ctx) => {
  const [header, footer, banner, sidebar, organizer] = await Promise.allSettled([
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
    }),
    client.query({
      query: GET_ORGANIZER,
    })
  ]);

  const appData = await App.getInitialProps(ctx);
  return {
    ...appData,
    header: header.value.data.allLayouts[0],
    footer: footer.value.data.allLayouts[0],
    banner: banner.value.data.allLayouts[0],
    sidebar: sidebar.value.data.allLayouts[0],
    organizer: organizer.value.data.allLayouts[0]
  };
};
