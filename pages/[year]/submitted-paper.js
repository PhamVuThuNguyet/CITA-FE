import client from '../../apollo-client';
import { getQuery } from '../../graphql/queries';
import SubmittedPaperContent from '../../components/submittedpaper/submitted-paper-content';

const SubmitedPaper = ({ data }) => {
    if (!data || !data.layouts) return <></>;
    return <SubmittedPaperContent data={data.layouts} />;
};

export default SubmitedPaper;

export async function getStaticProps({ params }) {
    const { year } = params;

    const { GET_SUBMITTED_PAPER } = getQuery(year);
    const Data = await client.query({ query: GET_SUBMITTED_PAPER });
    return {
        props: {
            data: Data.data.allPages[0],
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