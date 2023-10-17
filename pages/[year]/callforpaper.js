import CallforpaperContent from '../../components/callforpaper/callforpaper-content';
import client from '../../apollo-client';
import { getQuery } from '../../graphql/queries';

const Callforpaper = ({ data }) => {
  if(!data || !data.layouts) return <></>;
  return <CallforpaperContent data={data.layouts} />;
};

export default Callforpaper;

export async function getStaticProps({ params }) {
  const { year } = params;

  const { GET_CALL_FOR_PAPER } = getQuery(year);
  const callForPaperData = await client.query({ query: GET_CALL_FOR_PAPER });
  return {
    props: {
      data: callForPaperData.data.allPages[0],
    }, 
    revalidate: 5 
  };
}

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true, // false or "blocking"
  }
}
