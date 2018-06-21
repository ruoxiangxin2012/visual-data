import React, {
  PureComponent,
} from 'react';
import PropTypes from 'prop-types';
import ReactEcharts from 'echarts-for-react';

class LineChart extends PureComponent {
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
    console.log(this.props.data, 111);
    const {
      legend_data,
      xaxis_data,
      series_data,
    } = this.props.data;
    return {
      title: {
        text: '堆叠区域图'
      },
      tooltip : {
        trigger: 'axis'
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
          boundaryGap : false,
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

export default LineChart;