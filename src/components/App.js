import React from 'react';
import logo from '../assets/logo.svg';

const AppComponent = (props) => {
  return (
    <div className="App">
      <img src={logo} className="App__logo" alt="React logo" />
      <h1>Watch me change using react hooks! Isn't it neat?</h1>
      <input value={props.msg} onChange={(e) => props.setMsg(e.currentTarget.value)} />
    </div>
  );
}

export default AppComponent;
