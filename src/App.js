import './App.css';
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import Banner from './component/Banner.js';
import MainCarousel from './component/Carousel';
import Nav from './component/Nav.js';

function App() {
  let [inputValue, setInputValue] = useState("");
    let navigate = useNavigate();

  return (
    <div className="App">
      <Banner inputValue={inputValue} setInputValue={setInputValue} />
      <div className='aa'>
        <ul>
        <li onClick={()=> { navigate("/bestbook") }}>베스트셀러</li>
        <li onClick={()=> { navigate("/book") }}>국내도서</li>
        <li onClick={()=> { navigate("/book") }}>외국도서</li>
        <li onClick={()=> { navigate("/music") }}>음반</li>
        </ul>
      </div>
      <MainCarousel />
    </div>
  );
}

export default App;
