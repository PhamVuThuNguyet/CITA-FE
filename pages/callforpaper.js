import CallforpaperContent from '../components/callforpaper/callforpaper-content';
import client from '../apollo-client';
import { GET_CALL_FOR_PAPER } from '../graphql/queries';

const Callforpaper = ({ data }) => {
  return <CallforpaperContent data={data.layouts} />;
};

export default Callforpaper;

export async function getStaticProps(context) {
  const callForPaperData = await client.query({ query: GET_CALL_FOR_PAPER });
  return {
    props: {
      data: callForPaperData.data.allPages[0],
    }, 
  };
}
