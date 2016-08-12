import React, {PropTypes} from 'react';
export default class LeftFixed extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {leftMenu,children} = this.props;
    return (
        <div className="ro-layput">
            <div className="ro-layout-left">
                { leftMenu }
            </div>
            <div className="ro-layout-content">
                { children }
            </div>
        </div>
    );
  }
};

LeftFixed.propTypes = {
    leftMenu:React.PropTypes.node,
    children:React.PropTypes.node
}
