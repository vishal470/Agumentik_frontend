import React from "react";
import { useState, useEffect } from 'react';
import axios from 'axios';
import "./Number.css";

function Number() {

  const [myData, setMyData] = useState({});

  const getApi = () => {
    axios.get('https://admin-backend-eiy3.onrender.com/number')
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
    <div className="number">
      <div className="leftNumber">
        <div>
          <p style={{ textAlign: "center",fontSize:"40px" }}>{myData.year}+</p>
          <p>Year of Exprience</p>
        </div>

        <div>
          <p style={{ textAlign: "center",fontSize:"40px" }}>{myData.client}+</p>
          <p>Satisfied Clients</p>
        </div>
      </div>

      <div className="rightNumber">
        <div>
          <p style={{ textAlign: "center",fontSize:"40px" }}>{myData.project}%</p>
          <p>Success Project</p>
        </div>

        <div>
          <p style={{ textAlign: "center",fontSize:"40px" }}>{myData.award}+</p>
          <p>Award Gained</p>
        </div>
      </div>
    </div>
  );
}

export default Number;
