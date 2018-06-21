import React, {
  PureComponent,
} from 'react';
import PropTypes from 'prop-types';
import { Radio } from 'antd';

const RadioGroup = Radio.Group;
class ConfigPanel extends PureComponent {
  static propTypes = {
    styleObj: PropTypes.object,
  };
  static defaultProps = {
    styleObj: {},
  };

  shouldComponentUpdate(nextProps, nextState) {
    if(nextProps.styleObj !== this.props.styleObj){
      return true;
    }
    if (nextState !== this.state) {
      return true;
    }
    return false;
  }

  render() {
    const {
      styleObj,
    } = this.props;
    return (
      <div>

      </div>
    );
  }
}

export default ConfigPanel;