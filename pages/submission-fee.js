import SubmissionFeeContent from "../components/submission-fee/submission-fee-content";
import { getQuery } from '../graphql/queries';
import client from '../apollo-client';

export default function SubmissionFee({ data }) {
    return (
        <SubmissionFeeContent data={data.layouts} />
    )
}

export async function getStaticProps(context) {
    const { GET_FEE } = getQuery();
    const feeData = await client.query({ query: GET_FEE })
    return {
        props: {
            data: feeData.data.allPages[0]
        },
        revalidate: 5
    }
}