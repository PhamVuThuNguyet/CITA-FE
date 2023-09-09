import GuidelinesContent from "../components/guidelines/guidelines-content";
import { getQuery } from '../graphql/queries';
import client from '../apollo-client';

export default function SubmissionGuidelines({data}){
    return(
        <GuidelinesContent data = {data.layouts}/>
    )
}

export async function getStaticProps(context) {
    const { GET_GUIDELINES } = getQuery();
    const guidelinesData = await client.query({ query: GET_GUIDELINES })
    return {
      props: {
        data: guidelinesData.data.allPages[0]
      },
    }
  }