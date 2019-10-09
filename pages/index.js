import React from "react";
import Head from "next/head";
import Nav from "../components/nav";
import Jumbo from "../components/jumbo";
import Stats from "../components/stats";
import client from "../utils/prismic";
import HomepageQuery from "../gql/queries/homepage";

const Home = props => {
  return (
    <div>
      <Head>
        <title>{props.homepage.data.page.meta_title}</title>
        <link rel="icon" href="/static/favicon.ico" importance="low" />
        <link
          rel="stylesheet"
          href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
        />
        <meta name="description" content={props.homepage.data.page.description} />
      </Head>

      <Nav />
      <Jumbo />

      <Stats data={props.homepage.data.page.stats} />
    </div>
  );
};

Home.getInitialProps = async ({ req }) => {
  try {
    const homepage = await client.query({
      query: HomepageQuery
    });
    return { homepage };
  } catch (E) {
    console.log(E);
  }
};

export default Home;
