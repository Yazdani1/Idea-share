import React, { useState, useEffect, useContext } from "react";
import "./App.css";

const Post = () => {
  const [title, setTitle] = useState("");
  const [des, setDes] = useState("");
  const [imageUrl, setImageurl] = useState("");
  const [url, setUrl] = useState("");
  const [error, setError] = useState(false);
  const [picerror, setpicError] = useState(null);
  const [success, setSuccess] = useState(false);

  //   const dataSubmit = (e) => {
  //     e.preventDefault();
  //     setError("");

  //     setSuccess(false);
  //     const data = new FormData();
  //     data.append("file", imageUrl);
  //     data.append("upload_preset", "blog-app");
  //     data.append("cloud_name", "yaz");

  //     fetch("https://api.cloudinary.com/v1_1/yaz/image/upload", {
  //       method: "post",
  //       body: data,
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setUrl(data.url);
  //         setImageurl("");
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //     setImageurl("");
  //   };

  const showError = () => {
    <div
      className="alert alert-danger"
      style={{ display: error ? "" : "none" }}
    >
      {error}
    </div>;
  };

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="form-design card">
            <form>
              <div className="text-center">
                <h5 className="text-center">Sign In To Your Account</h5>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="email"
                  className="form-control"
                  placeholder="Title..."
                />
              </div>
              <div className="form-group">
                <textarea
                  type="password"
                  name="password"
                  className="form-control"
                  rows="5"
                  placeholder="Description..."
                />
              </div>

              <div class="form-group justify-content-center align-items-center">
                <button
                  type="submit"
                  // onKeyDown={buttonKeyDown}

                  name="btnSubmit"
                  className="btnContact"
                  value="Sign In"
                  onClick={(e) => {
                    //   submitData(e);
                  }}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
