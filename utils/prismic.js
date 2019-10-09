import { PrismicLink } from "apollo-link-prismic";
import { InMemoryCache } from "apollo-cache-inmemory";
import ApolloClient from "apollo-client";
import PrismicConfig from "../prismic-configuration.json";

const client = new ApolloClient({
  link: PrismicLink({
    uri: PrismicConfig.gqlEndpoint
  }),
  cache: new InMemoryCache()
});

export default client;
