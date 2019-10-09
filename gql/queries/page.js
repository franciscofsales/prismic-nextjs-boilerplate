import gql from "graphql-tag";

const PageQuery = gql`
  query PageQuery($uid: String!) {
    page(lang: "en-us", uid: $uid) {
      title
      stats {
        title
        body
      }
      meta_title
      description
      _meta {
        uid
      }
    }
  }
`;

export default PageQuery;
