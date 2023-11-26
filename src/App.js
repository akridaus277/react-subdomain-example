import logo from './logo.svg';
import './App.css';
import axios from "axios";
import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Landing from './landing';
import Dashboard from './dashboard';




export const MainApp=()=> {
  return (
    <Routes>
                <Route path="/" element={<Landing></Landing>}></Route>

                
            </Routes>
  );
}

export const SubApp=()=> {
  return (
    <Routes>
                <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>

                
            </Routes>
  );
}


