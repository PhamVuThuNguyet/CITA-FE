import AccommodationContent from '../../components/accommodation/accommondation-content';
import client from '../../apollo-client';
import { getQuery } from '../../graphql/queries';

const Accommodation = ({ data }) => {
  if(!data || !data.layouts) return <></>;
  return <AccommodationContent data={data.layouts} />;
};

export default Accommodation;

export async function getStaticProps({ params }) {
  const { year } = params;

  const { GET_CALL_FOR_PAPER } = getQuery(year);
  const accommodationData = await client.query({ query: GET_CALL_FOR_PAPER });
  return {
    props: {
      data: accommodationData.data.allPages[0],
    }, 
  };
}

export const getStaticPaths = async () => {
  return {
    paths: ['/2024/accommodation'],
    fallback: true, // false or "blocking"
  }
}