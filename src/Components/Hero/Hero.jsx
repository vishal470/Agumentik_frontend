import React from "react";
import { useState, useEffect } from 'react';
import axios from 'axios';
import "./Hero.css";

function Hero() {

  const [myData, setMyData] = useState({});

  const getApi = () => {
    axios.get('https://admin-backend-eiy3.onrender.com/hero')
      .then(res => {
        console.log(res.data)
        setMyData(res.data);
      })
      .catch(err => {
        console.log(err)
      })
  }
  useEffect(() => {
    getApi();
  }, []);


  return (
    <div>
      <div className="hero-section">
        <div className="content">
          {myData.heading}
        </div>

        <div className="text">
          {myData.paragraph}
        </div>

        <div className="button">
          <div className="border">
            <button className="btn">Start a project ➤</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
