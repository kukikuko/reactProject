import './App.css';
import { Row, Container } from "react-bootstrap";
import { Routes, Route, useNavigate, } from "react-router-dom";
import { useEffect, useState } from 'react';
import Banner from './component/Banner/Banner.js';
import BookCard from './component/BookCard/BookCard.js';
import BookDetial from './component/BookDetail/BookDetail.js';
import Nav from './component/Nav/Nav.js';
import axios from 'axios';
import Main from './Main.js';
import Bottom from './bottom/Bottom';

function App() {
  let [inputValue, setInputValue] = useState("");
  let navigate = useNavigate();
  let [books, setBooks] = useState([])

  useEffect(()=>{
    let cat = ["Book", "Foreign", "Music"]
    for( let c of cat) {
    const url =
      "/ttb/api/ItemList.aspx?ttbkey=ttbgurwn8051154001&QueryType=Bestseller&MaxResults=50&start=1&SearchTarget=" + c + "&Cover=Big&output=js&Version=20131101";
    axios.get(url)
      .then((value)=>{
        let temp = [...books];
        for (let i = 0; i < value.data.item.length; i++ ) {
          temp.push(value.data.item[i]);
        }
        setBooks(temp);
      })
    }
  }, [])

  return (
    <div className="App">
      <Banner inputValue={inputValue} setInputValue={setInputValue} />
      <div className='aa'>
        <ul>
        <li onClick={()=> { navigate("/bestbook") }}>베스트셀러</li>
        <li onClick={()=> { navigate("/book") }}>국내도서</li>
        <li onClick={()=> { navigate("/books") }}>외국도서</li>
        <li onClick={()=> { navigate("/music") }}>음반</li>
        </ul>
      </div>
      {/* <Nav /> */}

      <Routes>
        <Route path='/' element={
          <Main />
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
        }>
        </Route>
        <Route path="/goods/:id" element={<BookDetial books={books}/>} />
      </Routes>
      <Bottom />
    </div>

  );
}

export default App;
