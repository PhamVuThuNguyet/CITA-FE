import client from '../apollo-client';
import { GET_SUBMITTED_PAPER } from '../graphql/queries';
import SubmittedPaperContent from '../components/submitedpaper/submitted-paper-content';

const SubmitedPaper = ({ data }) => {
  return <SubmittedPaperContent data={data.layouts} />;
};

export default SubmitedPaper;

export async function getStaticProps(context) {
  const Data = await client.query({ query: GET_SUBMITTED_PAPER });
  return {
    props: {
      data: Data.data.allPages[0],
    },
  };
}
