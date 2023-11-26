import axios from "axios";
import React from "react";
import { BrowserRouter, Link, Route, Routes} from "react-router-dom";

const baseURL = "https://apikondangin.snapind.com/tirtaamanda/api/user";

export default function Dashboard() {
    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
      axios.get(baseURL, {
        
        headers: {
          'Content-Type':'application/json',
          'Authorization': 'Bearer 79|BSgMjHFWLMmwrmWEqHWF1dDdZHfOET2pvz4CYiG1',
          'Accept':'application/json',
          'Access-Control-Allow-Credentials':'true',
          'Access-Control-Allow-Origin':'*',
          'Access-Control-Allow-Methods': 'PUT, POST, GET, DELETE, PATCH, OPTIONS',
          'Access-Control-Allow-Headers': 'content-type'
      }
      }).then((response) => {
        setPost(response.data);
        // console.log(response.data);
      });
      
      
    }, []);
  
    if (!post) return null;
    console.log(post);

  return (
    <div>
        <h1>{post.data.name}</h1>
        <button onClick={()=>{
            window.location.assign(
                `${
                    window.location.protocol
                }//${window.location.host.substring(
                    window.location.host.indexOf(".") +
                        1
                )}/`
            );
        }}>klik untuk ke landing page</button>
    </div>
  );
}