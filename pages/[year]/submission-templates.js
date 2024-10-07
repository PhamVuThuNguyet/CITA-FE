import client from '../../apollo-client';
import SubmissionTemplatesContent from '../../components/submission-templates/submission-templates-content';
import { getQuery } from '../../graphql/queries';


const SubmitionTemplates = ({ data }) => {
    if (!data || !data.layouts) return <></>;
    return <SubmissionTemplatesContent data={data.layouts} />;
};

export default SubmitionTemplates;

export async function getStaticProps({ params }) {
    const { year } = params;

    const { GET_SUBMISSION_TEMPLATES } = getQuery(year);
    const Data = await client.query({ query: GET_SUBMISSION_TEMPLATES });
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