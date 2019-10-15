import gql from "graphql-tag";

const HomepageQuery = gql`
  {
    page(lang: "en-us", uid: "homepage") {
      title
      meta_title
      description
      _meta {
        uid
      }
    }
  }
`;

export default HomepageQuery;
