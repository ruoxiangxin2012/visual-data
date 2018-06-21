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
      series_data: [],
    },
  };

  getOption = () => {
    const {
      legend_data,
      series_data,
    } = this.props.data;
    return {
      title : {
        text: '某站点用户访问来源',
        subtext: '纯属虚构',
        x:'center'
      },
      tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        data: legend_data
      },
      series : [
        {
          name: '访问来源',
          type: 'pie',
          radius : '55%',
          center: ['50%', '60%'],
          data: series_data,
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };
  }
  render() {
    console.log(this.props.data);
    return (
      <ReactEcharts style={this.props.style} option={this.getOption()} />
    );
  }
}

export default LineChart;