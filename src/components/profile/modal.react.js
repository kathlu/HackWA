const React = require("react");
const {Modal, ModalHeader, ModalBody} = require("reactstrap");

type Props = {
  modalToggled: boolean,
  onModalClose: () => void,
};

class ModalClass extends React.Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      modalToggled: false
    };

    // toggle = this.toggle.bind(this);
}

  render() {
    return (
      <div>
        <Modal isOpen={this.state.modal} toggle={this.modalToggled}>
          <ModalHeader toggle={this.modalToggled}>Modal title</ModalHeader>
          <ModalBody>
            YO DIS THE MEMBERSHIP CARD
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

module.exports = ModalClass;