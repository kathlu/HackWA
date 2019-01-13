/*
 * @flow strict-local
 */
require("bootstrap/dist/css/bootstrap.min.css");
const React = require("react");
const CustomNavbar = require("../components/navbar/navbar.react");
const OrganizationContainer = require("../components/profile/OrganizationContainer.react");
const AccountDetailContainer = require("../components/profile/AccountDetailContainer.react");

type Props = {};

class Profile extends React.Component<Props> {
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
            User Profile
          </div>
          <OrganizationContainer />
          <div style={{ height: 80 }} />
          <AccountDetailContainer />
          <div style={{ height: 80 }} />
        </div>
      </div>
    );
  }
}

export default Profile;
