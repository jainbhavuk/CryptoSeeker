import React from "react";
// import Button from "../Button/Button";
import Box from "@mui/material/Box";

import { Container } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../Main/style.css";

const Main = () => {
  //goToPrices
  const goToPrices = () => {
    navigate("/prices");
  };

  // let disp = document.getElementById('price-inr');
  const navigate = useNavigate();
  const [input, setName] = useState("");

  const [val, updatePrice] = useState(0);
  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleClick = async () => {
    const res = await fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=${input}&vs_currencies=inr`
    );
    let data = await res.json();

    let p = data[`${input}`];
    let coin_price = p.inr;
    updatePrice(coin_price);
    let disp = document.getElementsByClassName("inner-results");

    disp[0].style.display = "flex";
  };

  return (
    <Container maxWidth="lg">
      <div className="outer-box">
        <Box
          className="inner-box"
          sx={{
            width: 600,
            height: 350,
            backgroundColor: "#ffff99",
            padding: "5px",
          }}
        >
          <div className="inputfield">
            <input
              type="text"
              className="inp-box"
              placeholder="Enter Coin Name (Eg. bitcoin)"
              onChange={handleChange}
            ></input>
          </div>
           <button onClick={handleClick} className='mybtn'>Check Price!</button> 

          {/* <Button onClickFun={handleClick} value="Click Me"></Button> */}
          <div className="results-box">
            <div className="inner-results">
              <h1 className="price-inr" id="price-inr">
                Rs. {val}
              </h1>
            </div>
          </div>
        </Box>
      </div>
      {/* <Button
        onClickFun={goToPrices}
        value="Check Out The Top 10 Cryptocurrencies!"
      ></Button> */}
      <button onClick={goToPrices} className='mybtn2'>Check Out The Top 10 Cryptocurrencies!</button>
    </Container>
  );
};

export default Main;
