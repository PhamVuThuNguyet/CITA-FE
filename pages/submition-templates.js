import client from '../apollo-client';
import SubmitionTemplatesContent from '../components/submitiontemplates/submition-templates-content';
import { GET_SUBMITION_TEMPLATES } from '../graphql/queries';

const SubmitionTemplates = ({ data }) => {
  return <SubmitionTemplatesContent data={data.layouts} />;
};

export default SubmitionTemplates;

export async function getStaticProps(context) {
  const Data = await client.query({ query: GET_SUBMITION_TEMPLATES });
  return {
    props: {
      data: Data.data.allPages[0],
    }, 
  };
}
