import './App.css';
import { Routes, Route, useNavigate, } from "react-router-dom";
import { useState } from 'react';
import Banner from './component/Banner/Banner.js';
import BookCard from './component/BookCard/BookCard.js';
import BookDetial from './component/BookDetail/BookDetail.js';
import Nav from './component/Nav/Nav.js';
import Main from './Pages/Main/Main.js';
import Bottom from './Pages/Bottom/Bottom.js';
import Header from './Pages/Header/Header';

function App() {
  let [inputValue, setInputValue] = useState("");
  let navigate = useNavigate();

  return (
    <div className="App">
      <Header />
      <Banner inputValue={inputValue} setInputValue={setInputValue} />
      <div className='aa'>
        <ul>
        <li onClick={()=> { navigate("/list/Book/ ") }}>국내도서</li>
        <li onClick={()=> { navigate("/list/Foreign/ ") }}>외국도서</li>
        <li onClick={()=> { navigate("/list/Music/ ") }}>음반</li>
        <li onClick={()=> { navigate("/list/DVD/ ") }}>DVD</li>
        </ul>
      </div>
      {/* <Nav /> */}

      <Routes>
        <Route path='/' element={<Main />} />
        <Route path="/goods/:itemId" element={<BookDetial/>} />
        <Route path="/list/:list/:category" element={<BookCard />} />
      </Routes>
      <Bottom />
    </div>

  );
}

export default App;

// <div>
//   <div className='sectionTitle'><span>이 상품 어때요?</span></div>
//   <Container style={{width: "1060px"}}>
//     <Row sm={1} md={4}>
//       {books.map((data, i) => {
//         return <BookCard key={data.isbn} books={books} book={data} i={i} />;
//       })}
//     </Row>
//   </Container>
// </div>