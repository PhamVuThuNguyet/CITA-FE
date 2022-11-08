import CallforpaperContent from '../components/callforpaper/callforpaper-content';
import client from '../apollo-client';
import { GET_CALL_FOR_PAPER } from '../graphql/queries';

//todo: get data from query
const Callforpaper = ({ data }) => {
  return <CallforpaperContent data={data.layouts} />;
};

export default Callforpaper;

export async function getStaticProps(context) {
  const homeData = await client.query({ query: GET_CALL_FOR_PAPER });
  return {
    props: {
      data: homeData.data.allPages[0],
    }, // will be passed to the page component as props
  };
}
