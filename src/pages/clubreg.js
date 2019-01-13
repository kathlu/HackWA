/*
 * @flow strict-local
 */
require("bootstrap/dist/css/bootstrap.min.css");
const React = require("react");
const CustomNavbar = require("../components/navbar/navbar.react");

type Props = {};

class Index extends React.Component<Props> {
  render(): React.Node {
    return (
      <div>
        <CustomNavbar />
      </div>
    );
  }
}

export default Index;
