import client from '../apollo-client';
import ScheduleContent from '../components/schedule/schedule-content';
import { getQuery } from '../graphql/queries';

const Schedule = ({ data }) => {
  return <ScheduleContent data={data.layouts}/>;
};

export default Schedule;

export async function getStaticProps(context) {
  const { GET_SCHEDULE } = getQuery();
  const keynoteData = await client.query({ query: GET_SCHEDULE });
  return {
    props: {
      data: keynoteData.data.allPages[0],
    }, 
  };
}