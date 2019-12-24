import React from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage.component';
import SHOPPAGE from './pages/shop/shop.component'


const Hatspage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)


function App() {
  return (
    <div>
      <Switch>
      <Route exact path="/" component={Homepage}></Route>
      <Route path="/hats" component={Hatspage}></Route>
      <Route path="/shop" component={SHOPPAGE}></Route>
      </Switch>
    </div>
  );
}

export default App;
