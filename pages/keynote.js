import client from '../apollo-client';
import KeyNoteContent from '../components/keynote/keynote-content';
import { GET_KEYNOTE } from '../graphql/queries';

const Callforpaper = ({ data }) => {
  return <KeyNoteContent data={data.layouts} />;
};

export default Callforpaper;

export async function getStaticProps(context) {
  const keynoteData = await client.query({ query: GET_KEYNOTE });
  return {
    props: {
      data: keynoteData.data.allPages[0],
    }, 
  };
}
