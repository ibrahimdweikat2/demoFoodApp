import React from "react";
import  ReactDOM  from "react-dom";
import App from "./App";
import {AuthContextProvider} from './Components/Store/AuthContext';
import './index.css'

const root=ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <AuthContextProvider><App /></AuthContextProvider>
)


