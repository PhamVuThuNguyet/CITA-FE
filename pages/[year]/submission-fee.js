import SubmissionFeeContent from '../../components/submission-fee/submission-fee-content';
import { getQuery } from '../../graphql/queries';
import client from '../../apollo-client';

export default function SubmissionFee({ data }) {
    if (!data || !data.layouts) return <></>;
    return <SubmissionFeeContent data={data.layouts} />;
}

export async function getStaticProps({ params }) {
    const { year } = params;

    const { GET_FEE } = getQuery(year);
    const feeData = await client.query({ query: GET_FEE });
    return {
        props: {
            data: feeData.data.allPages[0],
        },
        revalidate: 5
    };
}

export const getStaticPaths = async () => {
    return {
        paths: [
            {
                params: {
                    year: '2025',
                },
            },
        ],
        fallback: true, // false or "blocking"
    }
}