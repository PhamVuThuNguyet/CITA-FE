import { gql } from '@apollo/client';

export const GET_HEADER = gql`
  query getHeader {
    allLayouts(where: { name: "Header" }) {
      elements {
        name
        value
      }
    }
  }
`;

export const GET_FOOTER = gql`
  query getFooter {
    allLayouts(where: { name: "Footer" }) {
      elements {
        name
        value
      }
    }
  }
`


