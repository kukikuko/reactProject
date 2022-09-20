import { Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function BookCard({ books, book, i }) {

  let navigate = useNavigate();

  return (
    <Col>
      <Card
        style={{ width: "250px", cursor: "pointer", border : "none" }}
        // onClick={() => {
        //   navigate(`/foodDetail/${food.id}`);
        // }}
      >
        <Card.Img variant="top" src={books[i].cover} style={{width: "250px", height: "320px"}} />
        <Card.Body>
          <Card.Title style={{fontSize: "16px", fontWeight: "400"}}>{book.title}</Card.Title>
          {/* <Card.Text>{books[i].description}</Card.Text> */}
          <Card.Text style={{fontSize: "16px", fontWeight: "bold"}}>{book.priceSales}원</Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
    </Col>
  );
}

export default BookCard;
