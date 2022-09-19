import './App.css';
import { useState } from 'react';
import Banner from './component/Banner.js';
import Nav from './component/Nav.js';

function App() {
  let [inputValue, setInputValue] = useState("");

  return (
    <div className="App">
      <Banner inputValue={inputValue} setInputValue={setInputValue} />
      <Nav />
    </div>
  );
}

export default App;
