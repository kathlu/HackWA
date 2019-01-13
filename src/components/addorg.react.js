/*
 * @flow strict-local
 */
const firebase = require("firebase");
const { navigate } = require("gatsby");

const React = require("react");
const GenericButton = require("../components/GenericButton.react");
const {Dropdown, DropdownMenu, DropdownItem, DropdownToggle} = require("reactstrap");

type Props = {};

type State = { name: string, email: string, dropdownOpen: boolean, password: string, fberror: boolean };

class SignInView extends React.Component<Props, State> {
  state = {
    name: "",
    email: "",
    dropdownOpen: false,
    value: "",
    password: "",
    fberror: false
  };
  toggle = this.toggle.bind(this);
  select = this.select.bind(this);

  toggle(): void {
      this.setState(prevState => ({
          dropdownOpen: !prevState.dropdownOpen
      }));
  }

  select(event) {
      this.setState({
          value: event.target.innerText
      });
  }

  handleSubmit(evt) {
    evt.preventDefault();
        firebase.auth().signOut();
        if (this.state.name === ""){
            this.setState({errorMessage: "Please enter a display name"});
        } else {
            this.setState({errorMessage: undefined});
            firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password)
                .then(user => user.updateProfile({
                    displayName: this.state.name, year: this.state.value}))
                .catch(err => this.setState({errorMessage: err.message}))
                firebase.auth().onAuthStateChanged(user => {
                    if(user) {
                      navigate('/profile')
                                     
                    }
                });
        }
  }

  render() {
    return (
      <div style={{ marginTop: 50 }}>
        {this.state.fberror ? (
          <div className="alert alert-danger container">
            {this.state.fberror}
          </div>
        ) : (
          undefined
        )}
        <main>
          <div className="container">
            <form className="center" onSubmit={evt => this.handleSubmit(evt)}>
            <div className="form-group">
              <label htmlFor="year">Select an Organization:</label>
              <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
              <DropdownToggle caret>{this.state.value}
              </DropdownToggle>
              <DropdownMenu>
                  <DropdownItem onClick={this.select}>Chinese Student Association</DropdownItem>
                  <DropdownItem onClick={this.select}>Japanese Student Association</DropdownItem>
                  <DropdownItem onClick={this.select}>Thai Student Association</DropdownItem>
            </DropdownMenu> 
            </Dropdown>

            </div>



            <div class="card" style = {{width: 50 + '%'}}>
              <div class="card-body">
                <h4 class="card-title" style = {{marginTop: 2 + 'rem'}}>{this.state.value}</h4>
                <h4 class="card-text" style = {{marginTop: 5 + 'rem'}}>Jane Doe</h4>
                <p class="card-text text-muted" style = {{marginBottom: 1 + 'rem'}}>Valid thru 06/20</p>
              </div>
            </div>
            
            
            
            
            <div className="form-group">
            
                <button
                  type="submit"
                  className="btn btn-primary"
                  style = {{marginTop: 5 + 'rem'}}
                  onClick={evt => navigate('/profile')}
                >
                  Add Organization
                </button>
            </div>
            
            </form>
            
          </div>
        </main>
      </div>
    );
  }
}
module.exports = SignInView;