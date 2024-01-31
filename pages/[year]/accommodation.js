import AccommodationContent from '../../components/accommodation/accommondation-content';
import client from '../../apollo-client';
import { getQuery } from '../../graphql/queries';

const Accommodation = () => {
  return <AccommodationContent />;
};

export default Accommodation;


export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true, // false or "blocking"
  }
}