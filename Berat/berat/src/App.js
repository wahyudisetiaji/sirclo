import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './containers/Home'
import Create from './containers/Create'
import NavBar from './components/NavBar'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar></NavBar>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/create" component={Create} />
            </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
