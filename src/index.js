import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from './pages/home/index'
import ShopCar from './pages/shopCar/index'

const AppRouter = () => {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/shopCar" component={ShopCar}  />
    </Router>
  )
}

ReactDOM.render(<AppRouter />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
