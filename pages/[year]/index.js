import HomeContent from '../../components/home/home-content';
import client from '../../apollo-client';
import { getQuery } from '../../graphql/queries';

export default function Home({ data }) {
  if (!data || !data.layouts) return <></>;
  return <HomeContent data={data.layouts} />;
}

export async function getStaticProps({ params }) {
  const { year } = params;

  const { GET_HOME } = getQuery(year);
  const homeData = await client.query({ query: GET_HOME });
  return {
    props: {
      data: homeData.data.allPages[0],
    }, // will be passed to the page component as props
    revalidate: 5
  };
}

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true, // false or "blocking"
  };
};
