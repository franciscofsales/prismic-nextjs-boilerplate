import React from "react";
import { Container, Header, Segment } from "semantic-ui-react";

const Stats = () => (
  <Container>
    <Segment.Group
      horizontal
      style={{ borderRadius: 0, margin: 0, border: 0, boxShadow: "none" }}
    >
      <Segment
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: 175,
          backgroundColor: "transparent",
          border: 0
        }}
      >
        <Container text>
          <Header
            as="h2"
            style={{
              fontWeight: "bold",
              marginBottom: 0,
              fontSize: 40,
              color: "rgba(67, 206, 224,1)"
            }}
            content="30+"
          />
          <Header
            as="h3"
            style={{
              fontWeight: "lighter",
              marginTop: 5,
              lineHeight: 1.7,
              fontSize: 16
            }}
            content="Statistics goes here we've been trusted over 30 years."
          />
        </Container>
      </Segment>
      <Segment
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: 175,
          backgroundColor: "transparent",
          border: 0
        }}
      >
        <Container text>
          <Header
            as="h2"
            style={{
              fontWeight: "bold",
              marginBottom: 0,
              fontSize: 40,
              color: "rgba(67, 206, 224,1)"
            }}
            content="5,000"
          />
          <Header
            as="h3"
            style={{
              fontWeight: "lighter",
              marginTop: 5,
              lineHeight: 1.7,
              fontSize: 16
            }}
            content="Statistics goes here we've been trusted by 5000 texans."
          />
        </Container>
      </Segment>
      <Segment
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: 175,
          backgroundColor: "transparent",
          border: 0
        }}
      >
        <Container text>
          <Header
            as="h2"
            style={{
              fontWeight: "bold",
              marginBottom: 0,
              fontSize: 40,
              color: "rgba(67, 206, 224,1)"
            }}
            content="3-in-1"
          />
          <Header
            as="h3"
            style={{
              fontWeight: "lighter",
              marginTop: 5,
              lineHeight: 1.7,
              fontSize: 16
            }}
            content="Statistics goes here for your mortgage, insurance and title needs."
          />
        </Container>
      </Segment>
    </Segment.Group>
  </Container>
);

export default Stats;
