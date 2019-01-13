/*
 * @flow strict-local
 */

const React = require("react");
const GenericButton = require("../components/GenericButton.react");

type Props = {};

type State = { email: string, password: string, fberror: boolean };

class SignInView extends React.Component<Props, State> {
  state = {
    email: "",
    password: "",
    fberror: false
  };

  handleSubmit(evt) {}

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
                  Sign In
                </button>
              </div>
            </form>
            <p>Don't have an account yet?</p>
            <GenericButton siteTab="" color="rgba(70, 78, 255)">
              Sign Up!
            </GenericButton>
          </div>
        </main>
      </div>
    );
  }
}

module.exports = SignInView;
