import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './Components/Header';
import About from "./Components/Pages/About";
import Band from "./Components/Pages/band/Band";
import Home from "./Components/Pages/Home";
import Bands from "./Components/Pages/bands/Bands";
import './App.css';

const bands = [
    {
        id: 1,
        name: "Imagine Dragons",
    },
    {
        id: 2,
        name: "Linkin Park"
    },
    {
        id: 3,
        name: "Queen"
    },
    {
        id: 4,
        name: "System of dawn"
    }
]

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Router>
          <Fragment>
              <Header/>
              <Route exact path="/" component={Home}/>
              <Route exact path="/bands" render={(props) => <Bands bands={bands} {...props}/>}/>
              <Route path={"/bands/:id"} render={(props) => <Band band={bands[props.match.params.id-1]} {...props}/>}/>
              <Route path="/about" component={About}/>
          </Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
