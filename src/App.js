import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './Components/Header';
import About from "./Components/Pages/About";
import Home from "./Components/Pages/Home";
import Bands from "./Components/Pages/bands/Bands";
import BandContainer from "./Components/Pages/band/BandContainer";
import './App.css';



class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Router>
          <Fragment>
              <Header/>
              <Route exact path="/" component={Home}/>
              <Route exact path="/bands" component={Bands}/>
              <Route path={"/bands/:id"} component={BandContainer}/>
              <Route path="/about" component={About}/>
          </Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
