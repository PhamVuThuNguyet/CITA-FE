import { getQuery } from '../graphql/queries';
import client from '../apollo-client';
import SpecialSessionContent from '../components/special-session/special-session-content';

export default function Rule({ data }) {
    if (!data) return <></>
    return <SpecialSessionContent data={data.layouts} />;
}

export async function getStaticProps(context) {
    const { GET_SPECIAL_SESSION_VISNA } = getQuery();
    const boardsData = await client.query({ query: GET_SPECIAL_SESSION_VISNA });
    return {
        props: {
            data: boardsData.data.allPages[0],
        },
        revalidate: 5
    };
}
