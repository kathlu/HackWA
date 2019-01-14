/*
 * @flow strict-local
 */
const firebase = require("firebase");
const { navigate } = require("gatsby");
const axios = require("axios");

const React = require("react");
const GenericButton = require("../components/GenericButton.react");
const {
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle
} = require("reactstrap");

type Props = {};

type State = {
  name: string,
  email: string,
  dropdownOpen: boolean,
  password: string,
  fberror: boolean
};

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
    if (this.state.name === "") {
      this.setState({ errorMessage: "Please enter a display name" });
    } else {
      this.setState({ errorMessage: undefined });
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(user =>
          user.updateProfile({
            displayName: this.state.name,
            year: this.state.value
          })
        )
        .catch(err => this.setState({ errorMessage: err.message }));
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          console.log({
            sid: user.uid,
            name: this.state.name,
            year: this.state.value,
            email: this.state.email
          });
          axios
            .post(
              "https://us-central1-hackwa-membership.cloudfunctions.net/function-1/account",
              {
                sid: user.uid,
                name: this.state.name,
                year: this.state.value,
                email: this.state.email
              }
            )
            .then(function(response) {
              navigate("/profile");
            })
            .catch(function(error) {
              console.log(error);
            });
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
                <label htmlFor="name">Name</label>
                <input
                  type="name"
                  id="name"
                  className="form-control"
                  placeholder="your name"
                  value={this.state.name}
                  style={{ maxWidth: 600 }}
                  onInput={evt => this.setState({ name: evt.target.value })}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  placeholder="your email address"
                  value={this.state.email}
                  style={{ maxWidth: 600 }}
                  onInput={evt => this.setState({ email: evt.target.value })}
                />
              </div>
              <label htmlFor="year">Year in School</label>
              <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle caret>{this.state.value}</DropdownToggle>
                <DropdownMenu>
                  <DropdownItem onClick={this.select}>Freshman</DropdownItem>
                  <DropdownItem onClick={this.select}>Sophomore</DropdownItem>
                  <DropdownItem onClick={this.select}>Junior</DropdownItem>
                  <DropdownItem onClick={this.select}>Senior</DropdownItem>
                </DropdownMenu>
              </Dropdown>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  minLength="6"
                  placeholder="your password"
                  value={this.state.password}
                  style={{ maxWidth: 600 }}
                  onInput={evt => this.setState({ password: evt.target.value })}
                />
              </div>

              <div className="form-group">
                <button
                  type="submit"
                  className="btn btn-primary"
                  onSubmit={evt => this.handleSubmit(evt)}
                >
                  Register
                </button>
              </div>
            </form>
            <p>Already have an account?</p>
            <GenericButton siteTab="" color="rgba(70, 78, 255)">
              Log In
            </GenericButton>
          </div>
        </main>
      </div>
    );
  }
}
module.exports = SignInView;
