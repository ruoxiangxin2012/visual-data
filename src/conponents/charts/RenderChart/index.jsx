import React, {
  PureComponent,
} from 'react';
import PropTypes from 'prop-types';
import { default as LineChart } from '../LineChart'
import { default as ScatterChart } from '../ScatterChart'
import { default as MapChart } from '../MapChart'
import { default as BarChart } from '../BarChart'
import { default as PieChart } from '../PieChart'
import { default as BbdChart } from '../BbdChart'

class RenderChart extends PureComponent {
  static propTypes = {
    data: PropTypes.object,
    chartType: PropTypes.oneOf(['bbd', 'bar', 'line', 'map', 'pie', 'scatter']),
  };
  static defaultProps = {
    data: {},
    chartType: 'bar',
  };

  renderChart = (type, data) => {
    if (type === 'bar') {
      return <BarChart
        data={data}
        style={{ height: 600 }}
      />
    } else if (type === 'line') {
      return <LineChart
        data={data}
        style={{ height: 600 }}
      />
    }else if (type === 'map') {
      return <MapChart
        data={data}
        style={{ height: 600 }}
      />
    }else if (type === 'pie') {
      return <PieChart
        data={data}
        style={{ height: 600 }}
      />
    }else if (type === 'scatter') {
      return <ScatterChart
        data={data}
        style={{ height: 600 }}
      />
    }
    return <BbdChart
      data={data}
      style={{ height: 600 }}
    />
  }
  render() {
    const {
      chartType,
      data,
    } = this.props;
    console.log(chartType, data, 666);
    console.log(chartType, data);
    return (
      <div >
        {
          this.renderChart(chartType, data)
        }
      </div>
    );
  }
}

export default RenderChart;