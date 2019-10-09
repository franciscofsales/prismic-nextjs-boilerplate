import React from "react";
import Head from "next/head";
import Error from "../_error";
import Nav from "../../components/nav";
import Jumbo from "../../components/jumbo";
import client from "../../utils/prismic";
import Product from "../../gql/queries/product";
import { Header } from "semantic-ui-react";

const ProductPage = props => {
  if (!props.product) {
    return <Error statusCode={404} />;
  }
  return (
    <div>
      <Head>
        <title>{props.product.data.product.name}</title>
        <link rel="icon" href="/static/favicon.ico" importance="low" />
        <link
          rel="stylesheet"
          href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
        />
      </Head>

      <Nav />
      <Jumbo />
      <Header as="h1">
        Product Page {props.product.data.product._meta.uid}
      </Header>
    </div>
  );
};

ProductPage.getInitialProps = async ({ req, res, query }) => {
  try {
    const product = await client.query({
      query: Product,
      variables: {
        uid: query.slug
      }
    });
    return { product };
  } catch (E) {
    console.log(E);
    return {};
  }
};

export default ProductPage;
