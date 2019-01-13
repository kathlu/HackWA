/*
 * @flow strict-local
 */
const React = require("react");
const GenericButton = require("../GenericButton.react");

type Props = { name: string, email: string, year: string };

class AccountDetail extends React.Component<Props> {
  render(): React.Node {
    //let orgs = [];
    //for (let org of this.props.organizations) {
    //  orgs.push(<Org name={org} />);
    //}
    return (
      <div>
        <div
          class={"row"}
          style={{
            fontSize: 32,
            fontWeight: 300
          }}
        >
          Acccount Details
        </div>
        <div style={{ paddingTop: 20 }}>
          <div>
            <div>
              <p style={{ fontWeight: 700 }} className="text-center">
                NAME
              </p>
              <p className="text-center">{this.props.name}</p>
            </div>
          </div>
          <div>
            <div>
              <p style={{ fontWeight: 700 }} className="text-center">
                UW EMAIL
              </p>
              <p className="text-center">{this.props.email}</p>
            </div>
          </div>
          <div>
            <div>
              <p style={{ fontWeight: 700 }} className="text-center">
                YEAR IN SCHOOL
              </p>
              <p className="text-center">{this.props.year}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = AccountDetail;
