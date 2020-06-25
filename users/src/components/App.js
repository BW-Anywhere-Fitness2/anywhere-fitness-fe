import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PrivateRoute from '../PrivateRoute';
import UserListView from './UserListView';
import SignUpForm from './SignUpForm';


import Login from "../components/Login";
import "../components/App.css";

function App() {
  return (
    <SignUpForm/>
  );
}
export default App;
