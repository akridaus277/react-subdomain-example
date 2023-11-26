import axios from "axios";
import React from "react";
import { BrowserRouter, Link, Route, Routes} from "react-router-dom";

const baseURL = "http://tirtaamanda.localhost:8000/api/user";

export default function Dashboard() {
    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
      axios.get(baseURL, {
        headers: {
          'Authorization': 'Bearer 1|OgmFa7P4MeiAekMArmDYDRTziy20jmpl0NTEoX44'
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