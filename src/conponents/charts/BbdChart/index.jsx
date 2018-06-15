import React, {
  PureComponent,
} from 'react';
import PropTypes from 'prop-types';

class BbdChart extends PureComponent {
  static propTypes = {
    style: PropTypes.object
  };
  static defaultProps = {
    style: {}
  };
  render() {
    return (
      <div id = "map" style={this.props.style} ref = {node => this.map = node}></div>
    );
  }
}

export default BbdChart;