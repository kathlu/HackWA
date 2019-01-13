/*
 * @flow strict-local
 */
const React = require("react");
const Organization = require("./Organization.react");
const Modal = require("./modal.react");

type Props = {};

type State = {
  modalToggled: boolean,
  selectedOrg: string,
}

class OrganizationContainer extends React.Component<Props, State> {
  state = {
    modalToggled: false,
    selectedOrg: ""
  };

  onModalClose = () => {
    this.setState({
      modalToggled: false
    });
  }

  onClickGenerator = (id: string) => () => {
      this.setState(prevState => {
        console.log(prevState)
        return {modalToggled: !prevState.modalToggled,
        selectedOrg: id};
      });
  }

  render(): React.Node {
    console.log(this.state.selectedOrg, this.state.modalToggled)
    return (
      <div>
      <Organization
        organizations={[
          "Taiwanese Student Association",
          "Korean Student Association",
          "Hong Kong Student Association"
        ]}
        onClickGenerator={this.onClickGenerator}
      />
      <Modal
        modalToggled
        onModalClose={this.onModalClose}
        />
      </div>
      
    );
  }
}

module.exports = OrganizationContainer;
