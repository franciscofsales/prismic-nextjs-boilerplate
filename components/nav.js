import React from "react";
import { Menu, Container, Image, Button } from "semantic-ui-react";

const fixedMenuStyle = {
  backgroundColor: "transparent",
  boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)",
  border: "none",
  position: "absolute",
  top: 0
};

const linkStyle = {
  color: "white",
  textTransform: "uppercase"
};

const buttonStyle = {
  backgroundColor: "white",
  color: "rgba(67, 206, 224,1)",
  margin: "10px"
};

const Nav = () => (
  <Menu borderless fixed="top" style={fixedMenuStyle}>
    <Container>
      <Menu.Menu position="left">
        <Menu.Item>
          <Image size="small" src="/static/logo.svg" />
        </Menu.Item>
      </Menu.Menu>

      <Menu.Menu position="right">
        <Menu.Item as="a" style={linkStyle}>
          Insurance
        </Menu.Item>
        <Menu.Item as="a" style={linkStyle}>
          Mortgage
        </Menu.Item>
        <Menu.Item as="a" style={linkStyle}>
          Title
        </Menu.Item>
        <Menu.Item as="a" style={linkStyle}>
          Resources
        </Menu.Item>
        <Menu.Item as="a" style={linkStyle}>
          Our Difference
        </Menu.Item>
        <Menu.Item as="a" style={{ ...linkStyle, ...buttonStyle }}>
          Contact Us
        </Menu.Item>
      </Menu.Menu>
    </Container>
  </Menu>
);

export default Nav;
