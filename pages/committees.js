import { getQuery } from '../graphql/queries';
import client from '../apollo-client';
import CommitteesContent from '../components/committees/committees-content';

export default function Rule({ data }) {
  return <CommitteesContent data={data.layouts} />;
}

export async function getStaticProps(context) {
  const { GET_BOARDS } = getQuery();
  const boardsData = await client.query({ query: GET_BOARDS });
  return {
    props: {
      data: boardsData.data.allPages[0],
    },
  };
}
