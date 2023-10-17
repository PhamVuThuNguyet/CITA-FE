import client from '../apollo-client';
import { getQuery } from '../graphql/queries';
import SubmittedPaperContent from '../components/submitedpaper/submitted-paper-content';

const SubmitedPaper = ({ data }) => {
  return <SubmittedPaperContent data={data.layouts} />;
};

export default SubmitedPaper;

export async function getStaticProps(context) {
  const { GET_SUBMITTED_PAPER } = getQuery();
  const Data = await client.query({ query: GET_SUBMITTED_PAPER });
  return {
    props: {
      data: Data.data.allPages[0],
    }, 
    revalidate: 5
  };
}
