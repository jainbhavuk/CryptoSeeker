import "./App.css";

import Prices from "./Components/Prices/Prices";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/prices" element={<Prices />}></Route>
      </Routes>
      <div className="footer-section">
        <h2 style={{color:"white"}}>
          Made With &hearts; By{" "}
          <a
            href="https://www.linkedin.com/in/jainbhavuk555/"
            style={{
              textDecoration: "underline",
              color: "white",
              fontSize: "30px",
            }}
          >
            Bhavuk Jain
          </a>
        </h2>
      </div>
    </div>
  );
}

export default App;
