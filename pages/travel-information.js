import TravelContent from '../components/travel/travel-content';
import client from '../apollo-client';
import { getQuery } from '../graphql/queries';

const TravelInformation = ({ data }) => {
  return <TravelContent data={data.layouts} />;
};

export default TravelInformation;

export async function getStaticProps(context) {
  const { GET_CALL_FOR_PAPER } = getQuery();
  const travelData = await client.query({ query: GET_CALL_FOR_PAPER });
  return {
    props: {
      data: travelData.data.allPages[0],
    }, 
  };
}
