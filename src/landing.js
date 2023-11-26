import axios from "axios";
import React from "react";
import { BrowserRouter, Link, Route, Routes} from "react-router-dom";


export default function Landing() {


  return (
    <div>
        <h1>ini Landing page</h1>
        <button onClick={()=>{
            window.location.assign(
                `${
                    window.location.protocol
                }//${"tirtamanda."+window.location.host.substring(
                    window.location.host.indexOf(".") +
                        1
                )}/dashboard`
            );
        }}>klik untuk ke dashboard</button>
    </div>
  );
}