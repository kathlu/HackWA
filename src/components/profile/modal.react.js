const React = require("react");
const {Modal, ModalHeader, ModalBody} = require("reactstrap");

type Props = {
  modalToggled: boolean,
  onModalClose: () => void,
};

type State = { org: string}

class ModalClass extends React.Component<Props, State> {
  state = {
    org: ""
  };
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
        <Modal isOpen={this.modalToggled} toggle={this.modalToggled}>
          <ModalHeader toggle={this.modalToggled}>Modal title</ModalHeader>
          <ModalBody>
            <div class="card" style = {{width: 50 + '%'}}>
            <div class="card-body">
              <h4 class="card-title" style = {{marginTop: 2 + 'rem'}}>{this.state.org}</h4>
              <h4 class="card-text" style = {{marginTop: 5 + 'rem'}}>Jane Doe</h4>
              <p class="card-text text-muted" style = {{marginBottom: 1 + 'rem'}}>Valid thru 06/20</p>
            </div>
          </div>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

module.exports = ModalClass;