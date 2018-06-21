import React, {
  PureComponent,
} from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import {
  Button,
} from 'antd';
import style from './ChartShow.scss';
import RenderChart from '../../charts/RenderChart';
import ConfigPanel from './configPanel';

const ButtonGroup = Button.Group;
class ChartShow extends PureComponent {
  static propTypes = {
    changeStep: PropTypes.func,
    saveTask: PropTypes.func,
    chartType: PropTypes.string,
    data: PropTypes.object,
  };
  static defaultProps = {
    changeStep: () => {},
    saveTask: () => {},
    chartType: '',
    data: {},
  };

  state = {
    styleObj: {
      legendPosition: 'top',
    }
  }

  render() {
    return (
      <div className={style.panel}>
        <div className={style.content}>
          <div className={style.chartPanel}>
            <RenderChart
              chartType={this.props.chartType}
              data={this.props.data}
            />
          </div>
          <div className={style.configPanel}>
            <ConfigPanel
              styleObj={this.state.styleObj}
            />
          </div>
        </div>
        <div className={style.panelFooter}>
          <ButtonGroup>
            <Button onClick={() => this.props.changeStep(2)}>
              上一步
            </Button>
            <Button onClick={this.props.saveTask}>
              确定
            </Button>
            <Button>
              <Link to="/">取消</Link>
            </Button>
          </ButtonGroup>
        </div>
      </div>
    );
  }
}

export default ChartShow;