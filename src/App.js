import React, { memo } from 'react';
import { HashRouter } from 'react-router-dom';
import './App.css';
import Login from './Login'

export default memo(function App() {
  return (

    <HashRouter>
        <Login />
    </HashRouter>
  );
});
