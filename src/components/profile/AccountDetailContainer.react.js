/*
 * @flow strict-local
 */
const React = require("react");
const AccountDetail = require("./AccountDetail.react");

type Props = {};

class AccountDetailContainer extends React.Component<Props> {
  render(): React.Node {
    return (
      <AccountDetail name="Jane Doe" email="jane.doe@uw.edu" year="Junior" />
    );
  }
}

module.exports = AccountDetailContainer;
