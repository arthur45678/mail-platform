import React from 'react';
import './App.css';
import Dashboard from "./secure/dashboard/Dashboard";
import Users from "./secure/users/Users";
import {BrowserRouter, Route} from "react-router-dom";
import Login from "./public/Login";
import Register from "./public/Register";
import RedirectToDashboard from "./secure/RedirectToDashboard";
import UserCreate from "./secure/users/UserCreate";
import UserEdit from "./secure/users/UserEdit";
import Triggers from "./secure/triggers/Triggers";
import TriggerCreate from "./secure/triggers/TriggerCreate";
import TriggerEdit from "./secure/triggers/TriggerEdit";

function App() {
  return (
      <div className='App'>
          <BrowserRouter>
              <Route path={"/"} exact component={RedirectToDashboard} />
              <Route path={"/dashboard"} exact component={Dashboard} />
              <Route path={"/users"} component={Users} exact/>
              <Route path={'/users/create'} component={UserCreate} exact/>
              <Route path={'/users/:id/edit'} component={UserEdit} exact/>
              <Route path={"/triggers"} component={Triggers} exact/>
              <Route path={'/triggers/create'} component={TriggerCreate} exact/>
              <Route path={'/triggers/:id/edit'} component={TriggerEdit} exact/>
              <Route path={"/login"} component={Login} />
              <Route path={"/register"} component={Register} />
          </BrowserRouter>
      </div>
  );
}

export default App;
