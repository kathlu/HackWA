/*
 * @flow strict-local
 */
const React = require("react");
const GenericButton = require("../GenericButton.react");
const { navigate } = require("gatsby");

type Props = { 
  onClickGenerator: (id: string) => () => void,
  organizations: Array<string>
};

function Org(props: {
  onClickGenerator: (id: string) => () => void, 
  name: string }): React.Node {
  return (
    <div onClick={props.onClickGenerator(props.name)}>
      <p  className="text-center">{props.name}</p>
    </div>
  );
}

class Organization extends React.Component<Props> {
  render(): React.Node {
    let orgs = [];
    for (let org of this.props.organizations) {
      console.log(org)
      orgs.push(<Org 
        onClickGenerator={this.props.onClickGenerator} 
        name={org} />);
    }
    return (
      <div>
        <div
          class={"row"}
          style={{
            fontSize: 32,
            fontWeight: 300
          }}
        >
          My Organizations
        </div>
        <div style={{ paddingTop: 20 }}>
          {orgs}
          <div className="text-center">

            <button
                  type="submit"
                  className="btn btn-primary"
                  style = {{marginTop: 2 + 'rem'}}
                  onClick={evt => navigate('/neworg')}
                >
                  Add Organization
                </button>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Organization;
