import { gql } from '@apollo/client';

export const GET_HEADER = gql`
  query getHeader {
    allLayouts(where: { name: "NavBar" }) {
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
      url
      image {
        publicUrl
      }
      content(sortBy: order_ASC){
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

export const GET_SIDEBAR = gql`
  query getSidebar {
    allLayouts(where: { name: "Sidebar" }) {
      elements {
        name
        value
        url
      }
    }
  }
`;

export const GET_ORGANIZER = gql`
  query getOrg {
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

export const GET_GUIDELINES = gql`
query getGuidelines {
  allPages(where: { name: "Submission-Guidelines" }) {
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
    allPages(where: { name: "Committees" }) {
      layouts {
        name
        elements(sortBy: order_ASC) {
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
export const GET_CALL_FOR_PAPER = gql`
  query getCallForPaper {
    allPages(where: { name: "Call_For_Paper" }) {
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

export const GET_SUBMITTED_PAPER = gql`
query getPaper {
  allPages(where: { name: "Submitted-Paper" }) {
    layouts{
      name
      elements(sortBy: value_ASC) {
      name
      value
      content {
        name
        value
      }
    }
    }
  }
}
`;

export const GET_SUBMISSiON_TEMPLATES = gql`
  query getSubmissionTemplates {
    allPages(where: { name: "Submission-Templates" }) {
      layouts {
        name
        elements {
          name
          value
        }
      }
    }
  }
`;

export const GET_KEYNOTE = gql`
  query getKeynote {
    allPages(where: { name: "Keynote" }) {
      layouts {
        name
        elements {
          name
          value
          image {
            publicUrl
          }
          content(sortBy: order_ASC) {
            name
            value
          }
        }
      }
    }
  }
`;