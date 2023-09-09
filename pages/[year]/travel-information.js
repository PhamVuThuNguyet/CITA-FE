import TravelContent from '../../components/travel/travel-content';
import client from '../../apollo-client';
import { getQuery } from '../../graphql/queries';

const TravelInformation = ({ data }) => {
  if(!data || !data.layouts) return <></>;
  return <TravelContent data={data.layouts} />;
};

export default TravelInformation;

export async function getStaticProps({ params }) {
  const { year } = params;

  const { GET_CALL_FOR_PAPER } = getQuery(year);
  const travelData = await client.query({ query: GET_CALL_FOR_PAPER });
  return {
    props: {
      data: travelData.data.allPages[0],
    },
  };
}

export const getStaticPaths = async () => {
  return {
    paths: ['/2024/travel-information'],
    fallback: true, // false or "blocking"
  };
};
