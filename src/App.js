import React, { memo } from 'react';
import './App.css';
import { BrowserRouter as Router,Switch } from 'react-router-dom'
import FrontendAuth from '@router/FrontendAuth'
import routerMap from '@router/routerMap'

export default memo(function App() {
  return (
      <Router>
          <Switch>
            <FrontendAuth routerConfig={routerMap} />
          </Switch>
      </Router>
    
  );
});
