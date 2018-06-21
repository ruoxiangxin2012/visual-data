import React, {
  PureComponent,
} from 'react';
import PropTypes from 'prop-types';
import ReactEcharts from 'echarts-for-react';

class BarChart extends PureComponent {
  static propTypes = {
    data: PropTypes.object,
    style: PropTypes.object
  };
  static defaultProps = {
    style: {},
    data: {
      legend_data: [],
      xaxis_data: [],
      series_data: [],
    },
  };

  getOption = () => {
    const {
      legend_data,
      xaxis_data,
      series_data,
    } = this.props.data;
    return {
      tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
          type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      legend: {
        data: legend_data
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis : [
        {
          type : 'category',
          data : xaxis_data
        }
      ],
      yAxis : [
        {
          type : 'value'
        }
      ],
      series : series_data
    };
  }
  render() {
    return (
      <ReactEcharts style={this.props.style} option={this.getOption()} />
    );
  }
}

export default BarChart;