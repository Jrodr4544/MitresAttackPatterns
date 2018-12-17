import React, { Component } from 'react';
import { 
  BrowserRouter as Router, 
  Route
} from 'react-router-dom';

import NavBar from './components/NavBar';
import About from './components/About';
import AttacksPage from './components/AttacksPage';

//  Default React stuff
import logo from './mitre_attack.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
              <NavBar />
              <Route path='/attacks' component={AttacksPage}/>
              <Route path='/about' component={About}/>
              <Route exact path="/" render={() => (
                <div className="App"><h1>Welcome</h1><img className="App-logo" src={logo} alt='171x180' /></div>

              )}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
