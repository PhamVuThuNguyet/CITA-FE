import AccommodationContent from '../components/accommodation/accommondation-content';
import client from '../apollo-client';
import { getQuery } from '../graphql/queries';

const Accommodation = ({ data }) => {
  return <AccommodationContent data={data.layouts} />;
};

export default Accommodation;

export async function getStaticProps(context) {
  const { GET_CALL_FOR_PAPER } = getQuery();
  const accommodationData = await client.query({ query: GET_CALL_FOR_PAPER });
  return {
    props: {
      data: accommodationData.data.allPages[0],
    }, 
  };
}
