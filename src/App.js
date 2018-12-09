import React, { Component } from 'react';
import { 
  BrowserRouter as Router, 
  Route 
} from 'react-router-dom';

import NavBar from './components/NavBar';
import About from './components/About';

//  Default React stuff
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <NavBar />
              <Route exact path="/" render={() => <div>Home</div>} />
              {/* <Route path='/attacks' component={AttacksPage}/> */}
              <Route path='/about' component={About}/>
          </div>
        </Router>

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
      </div>
    );
  }
}

export default App;
