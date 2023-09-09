import { gql } from '@apollo/client';

export const getQuery = (year = 2023) => {
  const queryCondition = year <= 2023 ? '' : `_${year}`;

  const GET_HEADER = gql`
    query getHeader {
      allLayouts(where: { name: "NavBar" }) {
        elements (where: { name_contains: "${queryCondition}" }) {
          name
          value
          url
          content(sortBy: order_ASC) {
            name
            value
            url
          }
        }
      }
    }
  `;

  const GET_FOOTER = gql`
    query getFooter {
      allLayouts(where: { name: "Footer" }) {
        elements (where: { name_contains: "${queryCondition}" }) {
          name
          value
        }
      }
    }
  `;

  const GET_BANNER = gql`
    query getBanner {
      allLayouts(where: { name: "Banner" }) {
        elements (where: { name_contains: "${queryCondition}" }) {
          name
          value
          url
          image {
            publicUrl
          }
          content(sortBy: order_ASC) {
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

  const GET_SIDEBAR = gql`
    query getSidebar {
      allLayouts(where: { name: "Sidebar" }) {
        elements (where: { name_contains: "${queryCondition}" }) {
          name
          value
          url
        }
      }
    }
  `;

  const GET_ORGANIZER = gql`
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

  const GET_HOME = gql`
    query getHome {
      allPages(where: { name: "Home" }) {
        layouts {
          name
          elements (where: { name_contains: "${queryCondition}" }) {
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

  const GET_GUIDELINES = gql`
    query getGuidelines {
      allPages(where: { name: "Submission-Guidelines" }) {
        layouts {
          name
          elements (where: { name_contains: "${queryCondition}" }) {
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

  const GET_BOARDS = gql`
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
  const GET_CALL_FOR_PAPER = gql`
    query getCallForPaper {
      allPages(where: { name: "CallForPaper" }) {
        layouts {
          name
          elements (where: { name_contains: "${queryCondition}" }) {
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

  const GET_SUBMITTED_PAPER = gql`
    query getPaper {
      allPages(where: { name: "Submitted-Paper" }) {
        layouts {
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

  const GET_SUBMISSION_TEMPLATES = gql`
    query getSubmissionTemplates {
      allPages(where: { name: "Submission-Templates" }) {
        layouts {
          name
          elements (where: { name_contains: "${queryCondition}" }) {
            name
            value
          }
        }
      }
    }
  `;

  const GET_KEYNOTE = gql`
    query getKeynote {
      allPages(where: { name: "Keynote" }) {
        layouts {
          name
          elements (where: { name_contains: "${queryCondition}" }) {
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

  const GET_SCHEDULE = gql`
    query getKeynote {
      allPages(where: { name: "Schedule" }) {
        layouts {
          name
          elements (where: { name_contains: "${queryCondition}" }) {
            name
            value
            image {
              publicUrl
            }
            file {
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

  return {
    GET_HEADER,
    GET_FOOTER,
    GET_BANNER,
    GET_SIDEBAR,
    GET_ORGANIZER,
    GET_HOME,
    GET_GUIDELINES,
    GET_BOARDS,
    GET_CALL_FOR_PAPER,
    GET_SUBMITTED_PAPER,
    GET_SUBMISSION_TEMPLATES,
    GET_KEYNOTE,
    GET_SCHEDULE,
  }
};

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
        content(sortBy: order_ASC) {
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
    allPages(where: { name: "CallForPaper" }) {
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
      layouts {
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

export const GET_SCHEDULE = gql`
  query getKeynote {
    allPages(where: { name: "Schedule" }) {
      layouts {
        name
        elements {
          name
          value
          image {
            publicUrl
          }
          file {
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
