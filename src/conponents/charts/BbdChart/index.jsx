import React, {
  PureComponent,
} from 'react';
import PropTypes from 'prop-types';

class BbdChart extends PureComponent {
  static propTypes = {
    data: PropTypes.string,
    style: PropTypes.object,
  };
  static defaultProps = {
    style: {},
    data: JSON.stringify({
      nodes: [],
      links: [],
    }),
  };

  renderChart = () => {
    const chart = new window.BBDChart();
// 初始化
    chart.init({
      id: 'map', // dom id
      type: 'tree', // 图类型
      centerId: '4' // 目标点
    });
// 初始化拖动方法
    chart.drag();
    chart.add(JSON.parse(this.props.data));
  };

  componentDidMount() {
    this.renderChart();
  }
  render() {
    return (
      <div id = "map" style={this.props.style} />
    );
  }
}

export default BbdChart;