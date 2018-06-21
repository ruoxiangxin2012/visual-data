import React, {
  PureComponent,
} from 'react';
import axios from 'axios';
import { HashRouter } from 'react-router-dom';
import {
  Card,
  Table,
  Button,
  Popconfirm,
  message,
  Modal,
  Input,
} from 'antd';
import style from './Home.scss';
import RenderChart from '../charts/RenderChart'
import commonStyle from '../../style/common.scss';

class Home extends PureComponent {

  state = {
    taskNum: 10,
    dataSource: [],
    visibleChart: false,
    visibleTaskName: false,
    chartType: 'bbd',
    chartData: {
      nodes: [{id: 1, name: 'c1'}, {id: 2, name: 'c2'}],
      links: [{source: 1, target: 2, type: 1}]
    },
    newTaskName: '',
  };

  componentDidMount() {
    // this.onLoad();
  };

  onLoad = async () => {
    const res = await window.http.get('/mission_list/');
    if (res.status === 0) {
      this.setState({
        dataSource: res.data,
        taskNum: res.data.length,
      })
    }
  }

  delTask = async (id) => {
    const res = await window.http.post('/mission_del/', {
      mission_id: id,
    });
    if (res.status === 0) {
      this.onLoad();
      message.success('删除成功!');
    }
  };

  showChart = async (id) => {
    const res = await window.http.post('/load_data/', {
      mission_id: id,
    });
    if (res.status === 0) {
      this.setState({
        visibleChart: true,
        chartType: res.data.visual_type,
        chartData: res.data.data,
      })
    }
  };
  
  test = () => {
    this.setState({
      visibleChart: true,
    }, () => {
    
    })
  }

  hideModal = () =>
    this.setState({
      visibleChart: false,
    });

  changeTaskNamePanel = state =>
    this.setState({
      visibleTaskName: state,
    });

  changeTaskName = e =>
    this.setState({
      newTaskName: e.target.value,
    });

  addTask = () => {
    if (this.state.newTaskName) {
      this.props.history.push({
        pathname: '/add',
        query: {
          name: this.state.newTaskName,
        },
      });
    } else {
      message.error('请填写任务名称！')
    }
  };


  columns = [{
    title: '任务名称',
    dataIndex: 'name',
  }, {
    title: '可是化组件类型',
    dataIndex: 'visual_type',
  }, {
    title: '数据源类型',
    dataIndex: 'source_type',
  },{
    title: '数据源地址',
    dataIndex: 'source_path',
  },{
    title: '操作',
    render: (text, record) => (
      <div>
        <span
          onClick={() => this.showChart(record.id)}
          className={style.btnspan}
        >查看</span>
        <Popconfirm
          placement="leftBottom"
          title={'确定要删除该条任务？'}
          onConfirm={() => this.delTask(record.id)}
          okText="是"
          cancelText="否"
        >
          <span className={style.btnspan}>删除</span>
        </Popconfirm>
      </div>
    )
    }];
  render() {
    const {
      taskNum,
      dataSource,
      visibleChart,
      visibleTaskName,
      chartType,
      chartData,
      newTaskName,
    } = this.state;
    return (
      <div className={style.panel}>
        <div className={commonStyle.pageTitle}>任务管理</div>
        <Card>
          <div className={style.subHeader}>
            <span>{`任务数量：${taskNum}`}</span>
            <Button
              onClick={ () => this.changeTaskNamePanel(true) }
              className={commonStyle.floatRight}
            >
              添加任务
            </Button>
          </div>
          <Table rowKey={'id'} dataSource={dataSource} columns={this.columns} />
        </Card>

        <Modal
          title="图表详情"
          visible={visibleChart}
          footer={null}
          onCancel={this.hideModal}
        >
          <RenderChart chartType={chartType} data={chartData} />
        </Modal>
        <Modal
          title="请填写将要新增的任务名称"
          wrapClassName="vertical-center-modal"
          visible={visibleTaskName}
          onOk={this.addTask}
          onCancel={() => this.changeTaskNamePanel(false)}
        >
          <Input
            value={newTaskName}
            onChange={this.changeTaskName}
            placeholder="任务名称"
          />
        </Modal>
        <div onClick={this.test}>测试</div>
      </div>
    );
  }
}

export default Home;