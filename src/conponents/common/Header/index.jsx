import React, {
  PureComponent,
} from 'react';
import style from './Header.scss';

class Header extends PureComponent {
  render() {
    return (
      <div className={style.panel}>
        <span className={style.title}>数据可视化</span>
      </div>
    );
  }
}

export default Header;