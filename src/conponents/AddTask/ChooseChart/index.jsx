import React, {
  PureComponent,
} from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import {
  Tabs,
  Card,
  Breadcrumb,
  Row,
  Col,
  Button,
  message,
} from 'antd';
import classnames from 'classnames';
import style from './ChooseChart.scss'
import barStack from '../../../images/bar-stack.png';
import areaStack from '../../../images/area-stack.png';
import pieSimple from '../../../images/pie-simple.png';
import geoLines from '../../../images/geo-lines.png';
import effectScatterMap from '../../../images/effectScatter-map.png';
import BBDchar from '../../../images/BBDchar.png';

const TabPane = Tabs.TabPane;
const Meta = Card.Meta;
const ButtonGroup = Button.Group;
class ChooseChart extends PureComponent {
  static propTypes = {
    changeStep: PropTypes.func,
    changeChartType: PropTypes.func,
    chartType: PropTypes.string,
  };
  static defaultProps = {
    changeStep: () => {},
    changeChartType: () => {},
    chartType: '',
  };

  state = {
    typeList: [{
      type: 'bar',
      image: barStack,
      title: '堆叠柱状图',
      key: 1,
    },{
      type: 'line',
      image: areaStack,
      title: '堆叠区域图',
      key: 2,
    },{
      type: 'map',
      image: geoLines,
      title: '模拟迁徙',
      key: 3,
    },{
      type: 'pie',
      image: pieSimple,
      title: '某站点用户访问来源',
      key: 4,
    },{
      type: 'scatter',
      image: effectScatterMap,
      title: '全国主要城市空气质量',
      key: 5,
    },{
      type: 'bbd',
      image: BBDchar,
      title: '关系图',
      key: 6,
    }]
  };

  chooseType = type =>
    this.props.changeChartType(type);

  goNextStep = () => {
    if (this.props.chartType) {
      return this.props.changeStep(2);
    }
    message.error('请先选择表格类型');
  }

  render() {
    const {
      typeList,
    } = this.state;
    const {
      chartType,
    } = this.props;
    return (
      <div className={style.panel}>
        <div  className={style.breadCrumb}>
          <Breadcrumb>
            <Breadcrumb.Item>新增任务</Breadcrumb.Item>
            <Breadcrumb.Item>选择图表</Breadcrumb.Item>
          </Breadcrumb>
        </div>

        <Card>
          <Tabs
            tabPosition={'left'}
            size={'large'}
          >
            <TabPane tab="全部" key="1">
              <Row gutter={16}>
                {
                  typeList.map(val => (
                    <Col
                      onClick={() => this.chooseType(val.type)}
                      className={classnames({[style.actived]: chartType === val.type})}
                      key={val.key}
                      span={6}
                    >
                      <Card
                        hoverable
                        cover={<img alt="example" src={val.image} />}
                      >
                        <Meta
                          title={val.title}
                        />
                      </Card>
                    </Col>
                  ))
                }
              </Row>
            </TabPane>
            <TabPane tab="散点图" key="2">
              <Row gutter={16}>
                {
                  typeList.filter(val => val.type === 'scatter').map(val => (
                    <Col
                      onClick={() => this.chooseType(val.type)}
                      className={classnames({[style.actived]: chartType === val.type})}
                      key={val.key}
                      span={6}
                    >
                      <Card
                        hoverable
                        cover={<img alt="example" src={val.image} />}
                      >
                        <Meta
                          title={val.title}
                        />
                      </Card>
                    </Col>
                  ))
                }
              </Row>
              </TabPane>
            <TabPane tab="柱状图" key="3">
              <Row gutter={16}>
                {
                  typeList.filter(val => val.type === 'bar').map(val => (
                    <Col
                      onClick={() => this.chooseType(val.type)}
                      className={classnames({[style.actived]: chartType === val.type})}
                      key={val.key}
                      span={6}
                    >
                      <Card
                        hoverable
                        cover={<img alt="example" src={val.image} />}
                      >
                        <Meta
                          title={val.title}
                        />
                      </Card>
                    </Col>
                  ))
                }
              </Row>
            </TabPane>
            <TabPane tab="饼状图" key="4">
              <Row gutter={16}>
                {
                  typeList.filter(val => val.type === 'pie').map(val => (
                    <Col
                      onClick={() => this.chooseType(val.type)}
                      className={classnames({[style.actived]: chartType === val.type})}
                      key={val.key}
                      span={6}
                    >
                      <Card
                        hoverable
                        cover={<img alt="example" src={val.image} />}
                      >
                        <Meta
                          title={val.title}
                        />
                      </Card>
                    </Col>
                  ))
                }
              </Row>
            </TabPane>
            <TabPane tab="地图" key="5">
              <Row gutter={16}>
                {
                  typeList.filter(val => val.type === 'map').map(val => (
                    <Col
                      onClick={() => this.chooseType(val.type)}
                      className={classnames({[style.actived]: chartType === val.type})}
                      key={val.key}
                      span={6}
                    >
                      <Card
                        hoverable
                        cover={<img alt="example" src={val.image} />}
                      >
                        <Meta
                          title={val.title}
                        />
                      </Card>
                    </Col>
                  ))
                }
              </Row>
            </TabPane>
            <TabPane tab="折线图" key="6">
              <Row gutter={16}>
                {
                  typeList.filter(val => val.type === 'line').map(val => (
                    <Col
                      onClick={() => this.chooseType(val.type)}
                      key={val.key}
                      className={classnames({[style.actived]: chartType === val.type})}
                      span={6}
                    >
                      <Card
                        hoverable
                        cover={<img alt="example" src={val.image} />}
                      >
                        <Meta
                          title={val.title}
                        />
                      </Card>
                    </Col>
                  ))
                }
              </Row>
            </TabPane>
            <TabPane tab="关系图" key="7"><Row gutter={16}>
              {
                typeList.filter(val => val.type === 'bbd').map(val => (
                  <Col
                    onClick={() => this.chooseType(val.type)}
                    key={val.key}
                    className={classnames({[style.actived]: chartType === val.type})}
                    span={6}
                  >
                    <Card
                      hoverable
                      cover={<img alt="example" src={val.image} />}
                    >
                      <Meta
                        title={val.title}
                      />
                    </Card>
                  </Col>
                ))
              }
            </Row></TabPane>
          </Tabs>
          <div className={style.panelFooter}>
            <ButtonGroup>
              <Button onClick={this.goNextStep}>
                下一步
              </Button>
              <Button>
                <Link to="/">取消</Link>
              </Button>
            </ButtonGroup>
          </div>
        </Card>

      </div>
    );
  }
}

export default ChooseChart;