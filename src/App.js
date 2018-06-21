import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import './libs/http';
import {
  Header,
  SliderBar,
} from './conponents/common'
import Home from './conponents/home'
import AddTask from './conponents/AddTask'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className='containers'>
          <div className='leftSlider'>
            <SliderBar />
          </div>
          <Router>
            <div className='content'>
              <Route exact path="/" component={Home} />
              <Route exact path="/add" component={AddTask} />
            </div>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
