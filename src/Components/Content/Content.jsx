import React from "react";
import "./Content.css";
import { useState, useEffect } from 'react';
import axios from 'axios';

function Content() {
    const [myData, setMyData] = useState({});

  const getApi = () => {
    axios.get('https://admin-backend-eiy3.onrender.com/content')
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
    <div style={{backgroundColor:"#5840BA",paddingTop:"30px",paddingBottom:"100px",marginTop:"30px"}}>
      <div className="contentSection">
        <div className="content1">
          <div>
            <p style={{ fontSize: "35px" }}>
              {myData.heading}
            </p>
            <p>
              We're here to help you align,refine,
              <br />
              desgin and build.
            </p>
          </div>

        <img src={myData.img} alt="" style={{height:"350px",width:"370px",paddingTop:"100px",paddingLeft:"-100px"}}/>
        </div>

        <div className="content2">
          <div className="cardSection1">
            <div className="card1" style={{border:"2px solid #fff",padding:"20px",paddingBottom:"50px"}}>
                <div><img src="https://img.icons8.com/?size=512&id=lYFHCtCv6bvA&format=png" alt="" srcset="" style={{height:"50px",width:"50px"}}/></div>
                <div>{myData.card1}</div>
                <div style={{fontSize:"12px"}}>{myData.cardDetail}</div>
            </div>
            <div className="card2" style={{padding:"20px",color:"#fff"}}>
                <div><img src="https://cdn-icons-png.flaticon.com/512/10814/10814860.png" alt="" srcset="" style={{height:"50px",width:"50px"}}/></div>
                <div>{myData.card2}</div>
            </div>
          </div>

          <div className="cardSection2">
            <div className="card3" style={{paddingBottom:"110px",paddingTop:"20px",color:"#fff"}}>
                <div><img src="https://cdn-icons-png.flaticon.com/512/5178/5178758.png" alt="" srcset="" style={{height:"50px", width:"50px"}}/></div>
                <div>{myData.card3}</div>
            </div>

            <div className="card4" style={{paddingTop:"20px",color:"#fff"}}>
                <div><img src="https://cdn-icons-png.flaticon.com/512/1005/1005141.png" alt="" srcset="" style={{height:"50px",width:"50px"}}/></div>
                <div>{myData.card4}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
