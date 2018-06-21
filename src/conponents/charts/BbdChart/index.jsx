import React, {
  PureComponent,
} from 'react';
import PropTypes from 'prop-types';

class BbdChart extends PureComponent {
  static propTypes = {
    data: PropTypes.object,
    style: PropTypes.object
  };
  static defaultProps = {
    style: {},
    data: {},
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
// 添加数据，node 包含id: 唯一标识,name: 显示名称。links包括 source: 起点,target: 终点,type: 点的类别
    console.log(this.props.data, 111);
    chart.add(this.props.data);
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