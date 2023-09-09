import GuidelinesContent from '../../components/guidelines/guidelines-content';
import { getQuery } from '../../graphql/queries';
import client from '../../apollo-client';

export default function SubmissionGuidelines({ data }) {
  if(!data || !data.layouts) return <></>;
  return <GuidelinesContent data={data.layouts} />;
}

export async function getStaticProps({ params }) {
  const { year } = params;

  const { GET_GUIDELINES } = getQuery(year);
  const guidelinesData = await client.query({ query: GET_GUIDELINES });
  return {
    props: {
      data: guidelinesData.data.allPages[0],
    },
  };
}

export const getStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          year: '2024',
        },
      }, 
    ],
    fallback: true, // false or "blocking"
  }
}