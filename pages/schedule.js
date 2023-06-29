import client from '../apollo-client';
import ScheduleContent from '../components/schedule/schedule-content';
import { GET_SCHEDULE } from '../graphql/queries';

const Schedule = ({ data }) => {
  return <ScheduleContent data={data.layouts}/>;
};

export default Schedule;

export async function getStaticProps(context) {
  const keynoteData = await client.query({ query: GET_SCHEDULE });
  return {
    props: {
      data: keynoteData.data.allPages[0],
    }, 
  };
}