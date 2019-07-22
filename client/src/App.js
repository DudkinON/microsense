import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Message from './components/Message';


function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Message/>
      <Switch>
        <Route exact path="/" component={Home}/>

      </Switch>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
