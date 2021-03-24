import React, { memo } from 'react';
import './App.css';
import { BrowserRouter as Router,Switch } from 'react-router-dom'
import FrontendAuth from '@router/FrontendAuth'
import routerMap from '@router/routerMap'
import stores from './store'
import { Provider } from "mobx-react";

export default memo(function App() {
  return (
    <Provider {...stores}>
      <Router>
          <Switch>
            <FrontendAuth routerConfig={routerMap} />
          </Switch>
      </Router>
    </Provider>
    
  );
});
