import './BookCard.css';
import { Col, Card, Row, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from "axios";


function BookList({key, books, book, i}) {
  let navigate = useNavigate();

  let priceStandard = book.priceStandard;
  let priceSales = book.priceSales;
  let sale = Math.floor(((priceStandard-priceSales)/priceStandard)*100);

  return (
    <div>
    <Col>
      <Card
        onClick={() => {
          navigate(`/goods/${book.itemId}`)
        }}
        style={{ width: "250px", cursor: "pointer", border : "none", marginBottom : "10px" }}>
        <Card.Img variant="top" src={books[i].cover} style={{width: "250px", height: "320px"}} />
        <Card.Body>
          <Card.Title style={{fontSize: "16px", fontWeight: "400"}}>{book.title}</Card.Title>
          { priceStandard != priceSales 
            ? <Card.Text style={{fontSize: "16px", fontWeight: "bold"}}>
                <span style={{color: "rgb(250, 98, 47)"}}>{sale}%</span> {book.priceSales}원
                <span style={{display: "block", textDecoration:"line-through", color : "gray"}}>{priceStandard}원</span>
              </Card.Text>
            : <Card.Text style={{fontSize: "16px", fontWeight: "bold"}}>{book.priceStandard}원</Card.Text>
          }
        </Card.Body>
      </Card>
    </Col>
    </div>
  );
};


function BookCard() {
  let {list, category} = useParams();
  let [books, setBooks] = useState([]);

  useEffect(() => {
    async function get() {
      try {
        //응답 성공
        const response = await axios.get(
          `/ttb/api/ItemList.aspx?ttbkey=ttbgurwn8051154001&QueryType=Bestseller&CategoryId=${category}&MaxResults=100&start=1&SearchTarget=${list}&Cover=Big&output=js&Version=20131101`
        );
        console.log("Response DATA : ", response.data.item);
        setBooks(response.data.item);
        console.log(books);
      } catch (error) {
        //응답 실패
        console.log("Carousel Error : ", error);
      }
    }
    get();
  }, [list]);
  
  return(
  <div>
  <div className='sectionTitle'><span>이 상품 어때요?</span></div>
  <Container style={{width: "1100px"}}>
    <Row sm={1} md={4}>
      {books.map((data, i) => {
        return <BookList key={data.isbn} books={books} book={data} i={i} />;
      })}
    </Row>
  </Container>
</div>
  );
}

export default BookCard;

