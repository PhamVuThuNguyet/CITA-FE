import client from '../../apollo-client';
import ScheduleContent from '../../components/schedule/schedule-content';
import { getQuery } from '../../graphql/queries';

const Schedule = ({ data }) => {
  if(!data || !data.layouts) return <></>;
  return <ScheduleContent data={data.layouts}/>;
};

export default Schedule;

export async function getStaticProps({ params }) {
  const { year } = params;

  const { GET_SCHEDULE } = getQuery(year);
  const keynoteData = await client.query({ query: GET_SCHEDULE });
  return {
    props: {
      data: keynoteData.data.allPages[0],
    }, 
  };
}

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true, // false or "blocking"
  }
}