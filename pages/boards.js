import { GET_BOARDS } from '../graphql/queries';
import client from '../apollo-client';
import BoardsContent from '../components/boards/boards-content';

export default function Rule({data}){
    return(
        <BoardsContent data = {data.layouts}/>
    )
}

export async function getStaticProps(context) {
    const boardsData = await client.query({ query: GET_BOARDS })
    return {
      props: {
        data: boardsData.data.allPages[0]
      },
    }
  }