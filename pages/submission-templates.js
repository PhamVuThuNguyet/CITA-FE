import client from '../apollo-client';
import SubmissionTemplatesContent from '../components/submitiontemplates/submission-templates-content';
import { GET_SUBMISSiON_TEMPLATES } from '../graphql/queries';

const SubmitionTemplates = ({ data }) => {
  return <SubmissionTemplatesContent data={data.layouts} />;
};

export default SubmitionTemplates;

export async function getStaticProps(context) {
  const Data = await client.query({ query: GET_SUBMISSiON_TEMPLATES });
  return {
    props: {
      data: Data.data.allPages[0],
    }, 
  };
}
