import AccommodationContent from '../components/accommodation/accommondation-content';
import client from '../apollo-client';
import { GET_CALL_FOR_PAPER } from '../graphql/queries';

const Accommodation = ({ data }) => {
  return <AccommodationContent data={data.layouts} />;
};

export default Accommodation;

export async function getStaticProps(context) {
  const callForPaperData = await client.query({ query: GET_CALL_FOR_PAPER });
  return {
    props: {
      data: callForPaperData.data.allPages[0],
    }, 
  };
}
