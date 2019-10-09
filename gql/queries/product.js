import gql from "graphql-tag";

const ProductQuery = gql`
  query ProductQuery($uid: String!) {
    product(lang: "en-us", uid: $uid) {
      name
      _meta {
        uid
      }
    }
  }
`;

export default ProductQuery;
