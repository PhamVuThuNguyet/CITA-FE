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
`;

export const GET_BANNER = gql`

    query getBanner {
      allLayouts(where: { name: "Banner" }) {
        elements {
          name
          value
          image {
            publicUrl
          }
        }
      }
    }
`;

export const GET_TIMELINE = gql`
  query getTimeline {
    allLayouts(where: { name: "Home_Timeline" }) {
      elements {
        name
        value
      }
    }
  }
`;
