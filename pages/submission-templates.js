import client from '../apollo-client';
import SubmissionTemplatesContent from '../components/submitiontemplates/submission-templates-content';
import { getQuery } from '../graphql/queries';


const SubmitionTemplates = ({ data }) => {
  return <SubmissionTemplatesContent data={data.layouts} />;
};

export default SubmitionTemplates;

export async function getStaticProps(context) {
  const { GET_SUBMISSION_TEMPLATES } = getQuery();
  const Data = await client.query({ query: GET_SUBMISSION_TEMPLATES });
  return {
    props: {
      data: Data.data.allPages[0],
    }, 
    revalidate: 5 
  };
}
