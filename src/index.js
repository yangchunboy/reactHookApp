import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store/store'

import './index.less';

import Loading from './components/Loading'

const  Home = lazy(() => import('./pages/home/index'))
const  ShopCar = lazy(() => import('./pages/shopCar/index'))

const AppRouter = () => {
  return (
    <Provider store={ store }>
      <Router>
        <Suspense fallback={ <Loading /> }>
          <Route path="/" exact component={Home} />
          <Route path="/shopCar" component={ShopCar}  />
        </Suspense>
      </Router>
    </Provider>
  )
}

ReactDOM.render(<AppRouter />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
