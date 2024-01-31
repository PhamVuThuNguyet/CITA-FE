import TravelContent from '../../components/travel/travel-content';
import client from '../../apollo-client';
import { getQuery } from '../../graphql/queries';

const TravelInformation = () => {

  return <TravelContent />;
};

export default TravelInformation;


export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true, // false or "blocking"
  };
};
