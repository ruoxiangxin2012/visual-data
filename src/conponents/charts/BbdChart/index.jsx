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
    chart.add({
      nodes: [
        {id: 1, name: 'c1'}, {id: 2, name: 'c2'},
        {id: 3, name: 'c3'}, {id: 4, name: 'c4'},
        {id: 5, name: 'c5'}, {id: 6, name: 'c6'},
        {id: 'c7', name: 'c7'}, {id: 8, name: 'c8'},
      ],
      links: [
        {source: 1, target: 2, type: 1},
        {source: 1, target: 3, type: 1},
        {source: 1, target: 4, type: 1},
        {source: 1, target: 5, type: 1},
        {source: 2, target: 6, type: 1},
        {source: 3, target: 8, type: 1},
        {source: 'c7', target: 8, type: 1},
      ]
    });
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