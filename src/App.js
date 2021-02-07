import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import Form from './components/Form';
import Default from './components/Default';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Carousel} />
        </Switch>
        <Switch>
          <Route exact path='/' component={ProductList} />
          <Route path='/details' component={Details} />
          <Route path='/contact-form' component={Form} />
          <Route component={Default} />
        </Switch>
        <Route exact path='/' component={Footer} >
        </Route>
      </React.Fragment>
    );
  }
}

export default App;
