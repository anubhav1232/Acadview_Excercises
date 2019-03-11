import React, { Component } from 'react';
import { BrowserRouter,Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Person from './Components/Person';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
      <Navbar />
      <Route exact path ='/' component={Home} />
      <Route exact path ='/Person' component={Person} />
      </div>
      </BrowserRouter>

    );
  }
}

export default App;
