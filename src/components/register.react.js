/*
 * @flow strict-local
 */

const React = require("react");
const GenericButton = require("../components/GenericButton.react");

type Props = {};

type State = { name: string, email: string, year: string, password: string, fberror: boolean };

class SignInView extends React.Component<Props, State> {
  state = {
    name: "",
    email: "",
    year: "",
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
              <div className="form-group">
                <label htmlFor="year">Year in School</label>
                <input
                  type="year"
                  id="year"
                  className="form-control"
                  placeholder="your year in school"
                  value={this.state.year}
                  style={{ maxWidth: 600 }}
                  onInput={evt => this.setState({ year: evt.target.value })}
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