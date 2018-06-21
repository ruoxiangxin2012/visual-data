import React, {
  PureComponent,
} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  Breadcrumb,
  Form,
  Card,
  Input,
  Select,
  Button,
  Row,
  Col,
  Radio,
  Upload,
  message,
  Icon,
} from 'antd';
import style from './ChooseData.scss'

const FormItem = Form.Item;
const Option = Select.Option;
const ButtonGroup = Button.Group;
const RadioGroup = Radio.Group;
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 4 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
};
class ChooseData extends PureComponent {
  static propTypes = {
    changeStep: PropTypes.func,
    setData: PropTypes.func,
    chartType: PropTypes.string,
    taskName: PropTypes.string,
  };
  static defaultProps = {
    changeStep: () => {},
    setData: () => {},
    chartType: '',
  };

  state = {
    dataType: 1,
    canNext: false,
  };

  changeDataType = e =>
    this.setState({
      canNext: false,
      dataType:  e.target.value,
    });

  nextStep = () => {
    if (this.state.canNext){
      this.props.changeStep(3)
    } else {
      message.error(`请先上传文件`);
    }
  };

  getDataByDB = async (tableName) => {
    const res = await window.http.post('/load_data/', {
      visual_type: this.props.chartType,
      source_type: 'db',
      mission_name: this.props.taskName,
      source_path: tableName,
    }, {
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    if (res.status === 0) {
      this.props.setData({
        data: res.data.data,
        source_type: 'db',
        mission_name: this.props.taskName,
        source_path: tableName,
      });
      this.props.changeStep(3);
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        this.getDataByDB(values.tablename);
        return;
      }
    });
  };

  uploadFile = (info) => {
    if (info.file.status === 'done') {
      message.success(`${info.file.name} 上传成功`);
      this.props.setData({
        data: info.file.response.data.data,
        source_type: 'file',
        source_path: info.file.name,
        mission_name: this.props.taskName,
      });
      this.setState({
        canNext: true,
      });
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} 上传失败.`);
    }
  };

  getParams = (file) => {
    return {
      visual_type: this.props.chartType,
      source_type: 'file',
      mission_name: this.props.taskName,
      source_path: file.name,
      file: file,
    };
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const {
      dataType,
    } = this.state;

    return (
      <div className={style.panel}>
        <div className={style.breadCrumb}>
          <Breadcrumb>
            <Breadcrumb.Item>新增任务</Breadcrumb.Item>
            <Breadcrumb.Item>选择数据源</Breadcrumb.Item>
          </Breadcrumb>
          <Card>
            <Row className={style.marginBottom20}>
              <Col span={4}>
                <div className={style.formItem}><label>数据源</label></div>
              </Col>
              <Col span={8}>
                <RadioGroup onChange={this.changeDataType} value={dataType}>
                  <Radio value={1}>文件</Radio>
                  <Radio value={2}>数据库</Radio>
                </RadioGroup>
              </Col>
            </Row>
            <div className={classnames({[style.hide]: dataType === 2})}>
              <Row>
                <Col span={4}>
                  <div className={style.formItem}><label>上传文件</label></div>
                </Col>
                <Col span={8}>
                  <Upload
                    data={this.getParams}
                    action={'http://192.168.100.228:8124/load_data/'}
                    onChange={this.uploadFile}
                  >
                    <Button>
                      <Icon type="upload" /> Click to Upload
                    </Button>
                  </Upload>
                </Col>
              </Row>
              <div className={style.panelFooter}>
                <ButtonGroup>
                  <Button onClick={() => this.props.changeStep(1)}>
                    上一步
                  </Button>
                  <Button htmlType="submit" onClick={this.nextStep}>
                    下一步
                  </Button>
                </ButtonGroup>
              </div>
            </div>
            <Form className={classnames({[style.hide]: dataType === 1})} onSubmit={this.handleSubmit}>
              <FormItem
                {...formItemLayout}
                label="文件名"
              >
                {getFieldDecorator('name', {
                  rules: [{
                    required: true, message: '文件名不能为空!',
                  }],
                })(
                  <Input />
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="数据库地址"
              >
                {getFieldDecorator('sqlAdress', {
                  rules: [{
                    required: true, message: '数据库地址不能为空!',
                  }],
                })(
                  <Input />
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="用户名"
              >
                {getFieldDecorator('username', {
                  rules: [{
                    required: true, message: '用户名不能为空!',
                  }],
                })(
                  <Input />
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="口令"
              >
                {getFieldDecorator('password', {
                  rules: [{
                    required: true, message: '口令不能为空!',
                  }],
                })(
                  <Input />
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="数据表"
              >
                {getFieldDecorator('tablename', {
                  rules: [{
                    required: true, message: '数据表不能为空!',
                  }],
                })(
                  <Select>
                    <Option value="bardata">bardata</Option>
                  </Select>
                )}
              </FormItem>
              <div className={style.panelFooter}>
                <ButtonGroup>
                  <Button onClick={() => this.props.changeStep(1)}>
                    上一步
                  </Button>
                  <Button htmlType="submit">
                    下一步
                  </Button>
                </ButtonGroup>
              </div>
            </Form>
          </Card>
        </div>
      </div>
    );
  }
}

export default Form.create()(ChooseData);