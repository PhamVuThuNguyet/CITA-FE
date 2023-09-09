import client from '../apollo-client';
import KeyNoteContent from '../components/keynote/keynote-content';
import { getQuery } from '../graphql/queries';

const Callforpaper = ({ data }) => {
  return <KeyNoteContent data={data.layouts} />;
};

export default Callforpaper;

export async function getStaticProps(context) {
  const { GET_KEYNOTE } = getQuery();
  const keynoteData = await client.query({ query: GET_KEYNOTE });
  return {
    props: {
      data: keynoteData.data.allPages[0],
    }, 
  };
}
