import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [allposts, setPosts] = useState([]);

  const url="http://localhost:8080"

  // const loadallPosts = () => {
  //   axios
  //     .get("http://localhost:8080/api/getposts")
  //     .then((postresult) => {
  //       setPosts(postresult.data);
  //       console.log(postresult.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  const loadallPosts = () => {
    fetch(`/api/getposts`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) => {
        setPosts(result);
        console.log(result)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    loadallPosts();
  }, []);

  return (
    <div>
      <h5>All Data</h5>
      {allposts.map((item,index)=>(
        <div key={item._id}>
          <h1>{item.title}</h1>
        </div>
      ))}
    </div>
  );
};

export default App;
