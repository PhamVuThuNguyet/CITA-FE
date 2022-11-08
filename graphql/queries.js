import { gql } from '@apollo/client';

export const GET_HEADER = gql`
  query getHeader {
    allLayouts(where: { name: "Header" }) {
      elements {
        name
        value
        content(sortBy: order_ASC) {
          name
          value
          url
        }
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

export const GET_SIDEBAR = gql`
  query getSidebar {
    allLayouts(where: { name: "Home_Timeline" }) {
      elements {
        name
        value
        url
      }
    }
  }
`;

export const GET_ORGANIZER = gql`
  query getFooter {
    allLayouts(where: { name: "Organizer" }) {
      elements(sortBy: order_ASC) {
        name
        value
        image {
          publicUrl
        }
      }
    }
  }
`;

export const GET_HOME = gql`
  query getHome {
    allPages(where: { name: "Home" }) {
      layouts {
        name
        elements {
          name
          value
          image {
            publicUrl
          }
        }
      }
    }
  }
`;

export const GET_RULE = gql`
  query getRule {
    allPages(where: { name: "Rule" }) {
      layouts {
        name
        elements {
          name
          value
          image {
            publicUrl
          }
        }
      }
    }
  }
`;

export const GET_BOARDS = gql`
  query getBoards {
    allPages(where: { name: "Boards" }) {
      layouts {
        name
        elements {
          name
          value
          image {
            publicUrl
          }
        }
      }
    }
  }
`;
