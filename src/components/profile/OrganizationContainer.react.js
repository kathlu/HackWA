/*
 * @flow strict-local
 */
const React = require("react");
const Organization = require("./Organization.react");

type Props = {};

class OrganizationContainer extends React.Component<Props> {
  render(): React.Node {
    return (
      <Organization
        organizations={[
          "Taiwanese Student Association",
          "Korean Student Association",
          "Hong Kong Student Association"
        ]}
      />
    );
  }
}

module.exports = OrganizationContainer;
