import React, { useState } from "react";
import "../Prices/style.css";

import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
const Prices = () => {
  //Last Update
  
  const navigate = useNavigate();
  //Back To Home
  const backToHomePage = () => {
    navigate("/");
  };

  const [result, updateRes] = useState([]);
  const getList = async () => {
    const data = await fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=10&page=1&sparkline=false`
    );
    const res = await data.json();
    updateRes(res);
  };
 
  getList();
  return (
    <>
      <div className="heading">
        Top 10 Crypto Currencies By Market Cap (All Prices Are In INR)
      </div>
      
        
      
      <div className="outer-div">
        {result.map((data) => (
          <div className="dataBox">
            <img src={data.image} className="img-box" alt="Crypto Coin"></img>
            <h4 className="coinName">{data.name}</h4>
            <h5 className="coinPrice">{data.current_price}</h5>
          </div>
        ))}
      </div>
     
        <Button variant = "contained"  onClick={backToHomePage}
        style={{padding:"10px", fontSize:"25px", width:"30%", backgroundColor:"black"}}
        > Back To Home!</Button>
    </>
  );
};

export default Prices;
