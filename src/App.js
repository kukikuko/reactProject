import './App.css';
import { Routes, Route } from "react-router-dom";
import BookCard from './component/BookCard/BookCard.js';
import BookDetial from './component/BookDetail/BookDetail.js';
import Main from './Pages/Main/Main.js';
import Bottom from './Pages/bottom/Bottom.js';
import Header from './Pages/Header/Header';
import SearchCard from './component/SearchCard/SearchCard.js';
import Signup from './Pages/Signup/Signup';
import Login from './Pages/Login/Login';
import Cart from './Pages/Cart/Cart';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path="/goods/:itemId" element={<BookDetial/>} />
        <Route path="/list/:list/:category" element={<BookCard />} />
        <Route path="/search/:search" element={<SearchCard />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />}/>
      </Routes>
      <Bottom />
    </div>

  );
}

export default App;

