import React, {
  PureComponent,
} from 'react';
import {
  message,
} from 'antd';
import style from './AddTask.scss';
import ChooseData from './ChooseData';
import ChooseChart from './ChooseChart';
import ChartShow from './ChartShow';

class AddTask extends PureComponent {

  state = {
    step: 1,
    chartType: '',
    taskName: '',
    params: {
      visual_type: '',
      source_type: '',
      source_path: '',
      data: '',
      mission_name: '',
    },
  };

  chooseType = type => console.log(type) ||
    this.setState({
      activeKey: type,
    });

  changeStep = newStep =>
    this.setState({
      step: newStep,
    });

  changeChartType = newType =>
    this.setState({
      params: {
        ...this.state.params,
        visual_type: newType,
      }
    });

  setData = newData =>
    this.setState({
      params: {
        ...this.state.params,
        ...newData,
      },
    });

  componentDidMount() {
    this.setState({
      params: {
        ...this.state.params,
        mission_name: this.props.location.query.name,
      }
    })
  }

  saveTask = async () => {
    const res = await window.http.post('/save_mission/', this.state.params);
    if (res.status === 0) {
      message.success('保存成功');
    }
  };


  renderStepPanel = (step) => {
    if (step === 1) {
      return <ChooseChart
        changeStep={this.changeStep}
        changeChartType={this.changeChartType}
        chartType={this.state.params.visual_type}
      />
    }
    if (step === 2) {
      console.log(this.state.params.mission_name);
      return <ChooseData
        setData={this.setData}
        taskName={this.state.params.mission_name}
        changeStep={this.changeStep}
        chartType={this.state.params.visual_type}
      />
    }
    return <ChartShow
      data={this.state.params.data}
      changeStep={this.changeStep}
      chartType={this.state.params.visual_type}
      saveTask={this.saveTask}
    />
  };

  render() {
    const {
      step,
    } = this.state;
    return (
      <div className={style.panel}>
        {
          this.renderStepPanel(step)
        }
      </div>
    );
  }
}

export default AddTask;