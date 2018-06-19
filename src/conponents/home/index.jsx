import React, {
  PureComponent,
} from 'react';
import {
  Card,
  Table,
  Upload,
  Button,
  Icon,
} from 'antd';
import style from './Home.scss';
import commonStyle from '../../style/common.scss';

class Home extends PureComponent {

  state = {
    dataSource: [{
      name: '任务1',
      chartType: '散点图',
      dataType: '数据库',
      dataAddress: '12334.fefw',
    },{
      name: '任务2',
      chartType: '散点图',
      dataType: '数据库',
      dataAddress: '12334.fefw',
    }]
  };

  columns = [{
    title: '任务名称',
    dataIndex: 'name',
  }, {
    title: '可是化组件类型',
    dataIndex: 'chartType',
  }, {
    title: '数据源类型',
    dataIndex: 'dataType',
  },{
    title: '数据源地址',
    dataIndex: 'dataAddress',
  },{
    title: '操作',
    render: (text, record) => (
      <div>
        <span className={style.btnspan}>查看</span>
        <span className={style.btnspan}>删除</span>
      </div>
    )
    }];

  handlePreview = (file) => {
    console.log(file);
  }

  change = (e) => {
    const file = e.target.files[0];
    console.log(e.target.value);
  }

  render() {
    const {
      dataSource,
    } = this.state;
    return (
      <div className={style.panel}>
        <div className={commonStyle.pageTitle}>任务管理</div>
        <Card>
          <Table dataSource={dataSource} columns={this.columns} />
        </Card>

        <input type="file" onChange={this.change}/>

        <Upload
          onChange={this.handlePreview}
          listType="picture"
          action="//jsonplaceholder.typicode.com/posts/"
          >
          <Button>
            <Icon type="upload" /> upload
          </Button>
        </Upload>
      </div>
    );
  }
}

export default Home;