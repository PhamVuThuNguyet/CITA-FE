import HomeContent from "../components/home/home-content";
import client from '../apollo-client';
import { getQuery } from '../graphql/queries';

export default function Home({ data }) {
  return (
    <HomeContent data={data.layouts} />
  );
}

export async function getStaticProps(context) {
  const { GET_HOME } = getQuery();
  const homeData = await client.query({ query: GET_HOME })
  return {
    props: {
      data: homeData.data.allPages[0]
    }, // will be passed to the page component as props
    revalidate: 5
  }
}

