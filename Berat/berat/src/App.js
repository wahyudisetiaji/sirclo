import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from './store/index'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './containers/Home'
import Create from './containers/Create'
import Update from './containers/Update'
import Detail from './containers/Detail'
import NavBar from './components/NavBar'

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <Router>
          <div className="App">
            <NavBar></NavBar>
              <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/create" component={Create} />
                  <Route path="/detail/:id" component={Detail} />
                  <Route path="/update/:id" component={Update} />
              </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
