import './App.css';
import { Row, Container } from "react-bootstrap";
import { Routes, Route, useNavigate, } from "react-router-dom";
import { useState } from 'react';
import Banner from './component/Banner.js';
import MainCarousel from './component/Carousel';
import BookCard from './BookCard.js';
import Nav from './component/Nav.js';
import axios from 'axios';

function App() {
  let [inputValue, setInputValue] = useState("");
  let navigate = useNavigate();
  let [books, setBooks] = useState([
    {"title":"All About IB Psychology Essay - IB Psychology Essay Guide for SL and HL Students","link":"http:\/\/www.aladin.co.kr\/shop\/wproduct.aspx?ItemId=269866535&amp;partner=openAPI&amp;start=api","author":"강수민 (지은이)","pubDate":"2021-05-15","description":"성공적으로 IB 심리 과정을 이수한 저자가 에세이 노하우의 모든것을 이 책에 적어냈다. 심리 에세이를 접근하는 방법부터 안정적인 에세이의 구성, IB 심리에서 용이하게 쓰이는 용어와 문장들이 정리되어 있다.","isbn":"K452730517","isbn13":"9791197045318","itemId":269866535,"priceSales":50000,"priceStandard":50000,"mallType":"BOOK","cover":"https://image.aladin.co.kr//product//26986//65//cover//k452730517_1.jpg","categoryId":2946,"categoryName":"국내도서>자기계발>취업\/진로\/유망직업>해외취업\/이민\/유학.연수","publisher":"그루미출판"},
    {"title":"디즈니 알라딘 - 파 프롬 아그라바","link":"http:\/\/www.aladin.co.kr\/shop\/wproduct.aspx?ItemId=209468603&amp;partner=openAPI&amp;start=api","author":"아이샤 사이드 (지은이), 김미선 (옮긴이)","pubDate":"2019-09-25","description":"2019년 최고의 화제작 영화 〈알라딘〉의 세계관을 관통하는 디즈니 오리지널 소설. 아그라바를 떠나 시공간을 넘나드는 마법이 공존하는 세계에서 신비하고 긴장감 넘치는 모험담이 펼쳐진다.","isbn":"K822636271","isbn13":"9791187824824","itemId":209468603,"priceSales":14400,"priceStandard":16000,"mallType":"BOOK","stockStatus":"","mileage":800,"cover":"https:\/\/image.aladin.co.kr\/product\/20946\/86\/coversum\/k822636271_1.jpg","categoryId":50919,"categoryName":"국내도서>소설\/시\/희곡>영미소설","publisher":"아르누보","salesPoint":146,"adult":false,"fixedPrice":true,"customerReviewRank":10,"subInfo":{}},
    {"title":"Aladdin and His Lamp (반양장) - and the Other Stories","link":"http:\/\/www.aladin.co.kr\/shop\/wproduct.aspx?ItemId=6330826&amp;partner=openAPI&amp;start=api","author":"Harriette Taylor Treadwel, Margaret Free (지은이)","pubDate":"2009-12-01","description":"Reading Classics with Redbud 시리즈 8권. 어린이들에게 영어로 된 세계명작 동화들을 읽게 함으로써 영어 문장을 읽고 이해하는 능력을 갖도록 도와주는 시리즈로 어린이들에게 알맞은 동요나 동시를 포함하고 있다. 각각의 스토리마다 어린이들에게 적합한, 결코 지나치지 않는 교훈과 재미가 있다.","isbn":"8931514816","isbn13":"9788931514810","itemId":6330826,"priceSales":7200,"priceStandard":8000,"mallType":"BOOK","stockStatus":"","mileage":400,"cover":"https:\/\/image.aladin.co.kr\/product\/633\/8\/coversum\/8931514816_1.jpg","categoryId":49222,"categoryName":"국내도서>어린이>어린이 영어>영어동화\/영어만화","publisher":"레드버드(Redbud)","salesPoint":11,"adult":false,"fixedPrice":true,"customerReviewRank":0,"seriesInfo":{"seriesId":16744,"seriesLink":"http://www.aladin.co.kr/shop/common/wseriesitem.aspx?SRID=16744&amp;partner=openAPI","seriesName":"Reading Classics with Redbud 반양장 시리즈 8"},"subInfo":{}}
  ])

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
          <div>
            <MainCarousel />
            <div className='sectionTitle'><span>이 상품 어때요?</span></div>
            <Container style={{width: "1060px"}}>
              <Row sm={1} md={4}>
                {books.map((data, i) => {
                  return <BookCard key={data.itemId} books={books} book={data} i={i} />;
                })}
              </Row>
            </Container>
          </div>
        }>
        </Route>
      </Routes>
      
    </div>

  );
}

export default App;
