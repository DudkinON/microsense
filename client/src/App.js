import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route exact path="/" component={() => <div>Home page</div>}/>

      </Switch>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
