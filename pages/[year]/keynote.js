import client from '../../apollo-client';
import KeyNoteContent from '../../components/keynote/keynote-content';
import { getQuery } from '../../graphql/queries';

const Callforpaper = ({ data }) => {
  if (!data || !data.layouts) return <></>;
  return <KeyNoteContent data={data.layouts} />;
};

export default Callforpaper;

export async function getStaticProps({ params }) {
  const { year } = params;

  const { GET_KEYNOTE } = getQuery(year);
  const keynoteData = await client.query({ query: GET_KEYNOTE });
  return {
    props: {
      data: keynoteData.data.allPages[0],
    },
  };
}

export const getStaticPaths = async () => {
  return {
    paths: ['/2024/keynote'],
    fallback: true, // false or "blocking"
  };
};
