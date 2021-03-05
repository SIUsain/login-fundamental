import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Preferences from './components/Preferences/Preferences';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login/Login'
import useToken from './components/App/useToken'
// function setToken(userToken) {
//   sessionStorage.setItem('token', JSON.stringify(userToken));
// }

// function getToken() {
//   const tokenString = sessionStorage.getItem('token');
//   const userToken = JSON.parse(tokenString);
//   return userToken?.token
  
// }

function App() {
  const { token, setToken } = useToken();
  //const token = getToken();

  if(!token) {
    return <Login setToken={setToken} />
  }

  
  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/preferences">
            <Preferences />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;