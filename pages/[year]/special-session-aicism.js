import { getQuery } from '../../graphql/queries';
import client from '../../apollo-client';
import SpecialSessionContent from '../../components/special-session/special-session-content';

export default function Rule({ data }) {
  if(!data || !data.layouts) return <></>;
  return <SpecialSessionContent data={data.layouts} />;
}

export async function getStaticProps({ params }) {
  const { year } = params;

  const { GET_SPECIAL_SESSION_AICISM } = getQuery(year);
  const boardsData = await client.query({ query: GET_SPECIAL_SESSION_AICISM });
  return {
    props: {
      data: boardsData.data.allPages[0],
    }, 
    revalidate: 5
  };
}

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true, // false or "blocking"
  }
}
