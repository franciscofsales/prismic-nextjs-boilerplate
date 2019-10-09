import React from "react";
import Head from "next/head";
import Error from "../_error";
import Nav from "../../components/nav";
import Jumbo from "../../components/jumbo";
import client from "../../utils/prismic";
import { Header } from "semantic-ui-react";
import PageQuery from "../../gql/queries/page";

const GenericPage = props => {
  if (!props.page) {
    return <Error statusCode={404} />;
  }
  return (
    <div>
      <Head>
        <title>{props.page.data.page.meta_title}</title>
        <link rel="icon" href="/static/favicon.ico" importance="low" />
        <link
          rel="stylesheet"
          href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
        />
        <meta name="description" content={props.page.data.page.description} />
      </Head>

      <Nav />
      <Jumbo />
      <Header as="h1">{props.page.data.page._meta.uid}</Header>
    </div>
  );
};

GenericPage.getInitialProps = async ({ req, res, query }) => {
  try {
    const page = await client.query({
      query: PageQuery,
      variables: {
        uid: query.slug
      }
    });
    return { page };
  } catch (E) {
    console.log(E);
    return {};
  }
};

export default GenericPage;
