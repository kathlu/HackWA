/*
 * @flow strict-local
 */
import type { SiteTab } from "../constants";

const React = require("react");
const { Link } = require("gatsby");
const { SiteTabValue } = require("../constants");
const {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink
} = require("reactstrap");

function CustomNavItem(props: {
  selected?: SiteTab,
  siteTab: SiteTab
}): React.Node {
  const color =
    props.siteTab === "register" ? "rgba(62, 34, 3, 0.82)" : "black";
  return (
    <Link
      to={"/" + props.siteTab + "/"}
      style={{
        color: props.selected === props.siteTab ? "rgba(70, 78, 255)" : color,
        fontSize: 14,
        fontWeight: "normal",
        textDecoration: "none"
      }}
    >
      <NavItem>
        <NavLink>{SiteTabValue[props.siteTab]}</NavLink>
      </NavItem>
    </Link>
  );
}

type Props = {
  selected?: SiteTab
};

type State = {
  isOpen: boolean
};

class CustomNavbar extends React.Component<Props, State> {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render(): React.Node {
    return (
      <Navbar
        light
        expand="sm"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 3
        }}
      >
        <NavbarBrand>
          <Link
            to="/"
            style={{
              color: "black",
              fontSize: 14,
              fontWeight: 600,
              textDecoration: "none"
            }}
          >
            Husky Tennis Club
          </Link>
        </NavbarBrand>
        <NavbarToggler
          onClick={this.toggle}
          style={{ border: "none", outline: "none" }}
        />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <CustomNavItem selected={this.props.selected} siteTab="goals" />
            <CustomNavItem selected={this.props.selected} siteTab="blog" />
            <CustomNavItem selected={this.props.selected} siteTab="events" />
            <CustomNavItem selected={this.props.selected} siteTab="contact" />
            <CustomNavItem selected={this.props.selected} siteTab="register" />
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

module.exports = CustomNavbar;
