import React, { memo } from 'react';
import './App.css';
import Login from '@pages/Login'
import Collect from '@pages/Collect'
import { HashRouter,Route,Switch,Redirect } from 'react-router-dom'

export default memo(function App() {
  return (
    <HashRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/collect" component={Collect} />
          <Route path="/" >
            <Redirect to='/login'></Redirect>
          </Route>
        </Switch>
    </HashRouter>
  );
});
