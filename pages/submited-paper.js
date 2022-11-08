import SubmitedPaperContent from '../components/submitedpaper/submitedpaper-content';
import client from '../apollo-client';
import { GET_SUBMITED_PAPER } from '../graphql/queries';

const SubmitedPaper = ({ data }) => {
  return <SubmitedPaperContent data={data.elements} />;
};

export default SubmitedPaper;

export async function getStaticProps(context) {
  const Data = await client.query({ query: GET_SUBMITED_PAPER });
  return {
    props: {
      data: Data.data.allLayouts[0],
    }, 
  };
}
