import RuleContent from "../components/rule/rule-content";
import { GET_RULE } from '../graphql/queries';
import client from '../apollo-client';

export default function Rule({data}){
    return(
        <RuleContent data = {data.layouts}/>
    )
}

export async function getStaticProps(context) {
    const ruleData = await client.query({ query: GET_RULE })
    return {
      props: {
        data: ruleData.data.allPages[0]
      },
    }
  }