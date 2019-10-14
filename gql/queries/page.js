import gql from "graphql-tag";

const PageQuery = gql`
  query PageQuery($uid: String!) {
    page(lang: "en-us", uid: $uid) {
      title
      meta_title
      description
      body {
        ... on PageBodyStats {
          fields {
            value
            label
          }
        }
      }
      _meta {
        uid
      }
    }
  }
`;

export default PageQuery;
