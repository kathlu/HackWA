/*
 * @flow strict-local
 */
require("bootstrap/dist/css/bootstrap.min.css");
const styles = require("../style/index.module.css");
const React = require("react");
const CustomNavbar = require("../components/navbar/navbar.react");
const Login = require("../components/login.react");

type Props = {};

class Index extends React.Component<Props> {
  render(): React.Node {
    return (
      <div>
        <CustomNavbar />
        <div class={"container"} style={{ marginTop: 100 }}>
          <div
            class={"row"}
            style={{
              fontSize: 52,
              fontWeight: 700
            }}
          >
            Login
          </div>
        </div>
        <Login />
      </div>
    );
  }
}

export default Index;
