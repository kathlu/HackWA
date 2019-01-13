/*
 * @flow strict-local
 */
require("bootstrap/dist/css/bootstrap.min.css");
const React = require("react");
const CustomNavbar = require("../components/navbar/navbar.react");
const AddOrg = require("../components/addorg.react");

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
            Join an Organization
          </div>
        </div>
        <AddOrg />
      </div>
    );
  }
}

export default Index;