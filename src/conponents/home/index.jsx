import React, {
  PureComponent,
} from 'react';
import style from './Home.scss';
import {
  LineChart,
  ScatterChart,
  MapChart,
  BarChart,
  PieChart,
  BbdChart
} from '../charts';

class Home extends PureComponent {

  render() {
    return (
      <div className={style.panel}>
        <LineChart style={{ height: 600 }} />
        <MapChart style={{ height: 600 }} />
        <ScatterChart style={{ height: 600 }} />
        <BarChart style={{ height: 600 }} />
        <PieChart style={{ height: 600 }} />
        <BbdChart style={{ height: 600 }} />
      </div>
    );
  }
}

export default Home;