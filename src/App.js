import logo from './logo.svg';
import './App.css';
import Prices from './Components/Prices/Prices';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
      <Route path='/' element={<Main/>}></Route>
      <Route path='/prices' element={<Prices/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
