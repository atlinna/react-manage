import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter as Router, } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './store'
// import Login from './pages/login'


ReactDOM.render(

  <Router basename="">
    {/* <Route exact path="/" component={App} /> */}
    <Provider store={store}>
      <App />
    </Provider>
    {/* <Route path="/login" component={Login} /> */}
  </Router>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
