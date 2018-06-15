import React, { Component } from 'react';
import './App.css';
import {
  Header,
  SliderBar,
} from './conponents/common'
import Home from './conponents/home'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className='containers'>
          <div className='leftSlider'>
            <SliderBar />
          </div>
          <div className='content'>
            <Home />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
