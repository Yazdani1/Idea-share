import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Post from "./Post";
const App = () => {
  const [allposts, setPosts] = useState([]);


  const loadallPosts = () => {
    fetch(`/api/getposts`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) => {
        setPosts(result);
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    loadallPosts();
  }, [allposts]);

  return (
    <div>
      <Post />

      <div className="container">
        {allposts.map((item, index) => (
          <div className="card post-items" key={item._id}>
            <div>
              <p className="postinfo">{item.title}</p>
              <p className="postinfo">{item.des}</p>
              <p className="postinfo">{item.date}</p>


            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
