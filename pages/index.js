import React from "react";
import Head from "next/head";
import Nav from "../components/nav";
import Jumbo from "../components/jumbo";
import Stats from "../components/stats";

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/static/favicon.ico" importance="low" />
      <link
        rel="stylesheet"
        href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
      />
    </Head>

    <Nav />
    <Jumbo />

    <Stats />
  </div>
);

export default Home;
