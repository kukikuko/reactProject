import { Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

//params 넣어서 다시 세팅하기


function BookCard({ books, book, i }) {

  let navigate = useNavigate();
  let priceStandard = book.priceStandard;
  let priceSales = book.priceSales;
  let sale = Math.floor(((priceStandard-priceSales)/priceStandard)*100);
  
  return (
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
  );
}

export default BookCard;
