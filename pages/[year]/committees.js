import { getQuery } from '../../graphql/queries';
import client from '../../apollo-client';
import CommitteesContent from '../../components/committees/committees-content';

export default function Rule({ data }) {
  if (!data || !data.layouts) return <></>;
  return <CommitteesContent data={data.layouts} />;
}

export async function getStaticProps({ params }) {
  const { year } = params;

  const { GET_BOARDS } = getQuery(year);
  const boardsData = await client.query({ query: GET_BOARDS });
  return {
    props: {
      data: boardsData.data.allPages[0],
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
  };
};
