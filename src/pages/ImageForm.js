import React, { useState, useEffect } from "react";
import axios from 'axios';

import AddGallery from "../assets/addGallery.svg";

const ImageForm = () => {

  const [file, setFile] = useState();
  const [title, setTitle] = useState('');

  const handleChangeTitle = (event) => {
      console.log(event.target.value)
      setTitle(event.target.value)
  }

  const handleChangeFile = (event) => {
      // We take the data selected
      console.log(event.target.files[0])
      setFile(event.target.files[0])
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // This form data will be use for save file and title
    const formData = new FormData()

    // Here we named the input, in this case file and title
    formData.append('file', file)
    formData.append('title', title)

    const res = await axios.post('http://localhost:4000/API/upload-image', formData)
    console.log(res);
  };

  return (
    <div className="row mt-4">
      <div className="col-sm-7">
        <img src={AddGallery} alt="Add Gallery" width="70%" />
      </div>
      <div className="col-sm-5">
        <div className="card">
          <div className="card-body">
            <h4>Upload image</h4>
            <hr />
            <form onSubmit={handleSubmit}>
              <div className="form-group p-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Title"
                  onChange={handleChangeTitle}
                />
              </div>
              <div className="form-group p-2">
                <input
                  type="file"
                  className="form-control"
                  onChange={handleChangeFile}
                />
              </div>
              <div className="form-group p-2">
                <button type="submit" className="btn btn-primary w-100">
                  Upload
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageForm;
