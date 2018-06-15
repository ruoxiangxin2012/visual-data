import React, {
  PureComponent,
} from 'react';
import { Menu, Icon } from 'antd';
import style from './SliderBar.scss';

class SliderBar extends PureComponent {
  render() {
    return (
      <div className={style.panel}>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
        >
          <Menu.Item key="1">
            <Icon type="pie-chart" />
            <span>Option 1</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="desktop" />
            <span>Option 2</span>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default SliderBar;