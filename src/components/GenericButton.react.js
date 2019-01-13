/*
 * @flow strict-local
 */
import type { SiteTab } from "../constants";

const style = require("../style/index.module.css");
const React = require("react");
const { Link } = require("gatsby");
const { Button } = require("reactstrap");

type Props = {
  siteTab: SiteTab,
  color: string,
  transparent?: boolean,
  marginLeft?: number,
  width?: number,
  children?: React.Node
};

function SolidButton(props: {
  color: string,
  marginLeft?: number,
  width?: number,
  children?: React.Node
}): React.Node {
  return (
    <Button
      className={style.buttonCustom}
      style={{
        backgroundColor: props.color,
        color: "rgba(255,255,255,0.8)",
        borderStyle: "none",
        marginLeft: props.marginLeft !== null ? props.marginLeft : 0,
        width: props.width !== null ? props.width : undefined
      }}
    >
      {props.children}
    </Button>
  );
}

function TransparentButton(props: {
  color: string,
  marginLeft?: number,
  width?: number,
  children?: React.Node
}): React.Node {
  return (
    <Button
      className={style.buttonCustom + " " + style.buttonTransparent}
      style={{
        borderColor: props.color,
        borderWidth: "2px",
        color: props.color,
        marginLeft: props.marginLeft !== null ? props.marginLeft : 0,
        width: props.width !== null ? props.width : undefined
      }}
      outline
    >
      {props.children}
    </Button>
  );
}

class GenericButton extends React.Component<Props> {
  render(): React.Node {
    return (
      <Link to={"/" + this.props.siteTab + "/"}>
        {this.props.transparent === true ? (
          <TransparentButton
            marginLeft={this.props.marginLeft}
            width={this.props.width}
            color={this.props.color}
          >
            {this.props.children}
          </TransparentButton>
        ) : (
          <SolidButton
            marginLeft={this.props.marginLeft}
            width={this.props.width}
            color={this.props.color}
          >
            {this.props.children}
          </SolidButton>
        )}
      </Link>
    );
  }
}

module.exports = GenericButton;
