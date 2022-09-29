import './SearchCard.css';
import { Col, Card, Row, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from "axios";
import Title from '../Title/Title';


function SearchList({key, searches, search, i}) {
  let navigate = useNavigate();

  let Standard = search.priceStandard;
  let Sales = search.priceSales;
  let saleRate = Math.floor(((Standard-Sales)/Standard)*100);

  return (
    <div>
    <Col>
      <Card
        onClick={() => {
          navigate(`/goods/${search.itemId}`)
        }}
        style={{ width: "250px", cursor: "pointer", border : "none", marginBottom : "10px" }}>
        <Card.Img variant="top" src={searches[i].cover} style={{width: "250px", height: "320px"}} />
        <Card.Body>
          <Card.Title style={{fontSize: "16px", fontWeight: "400"}}>{search.title}</Card.Title>
          { Standard != Sales 
            ? <Card.Text style={{fontSize: "16px", fontWeight: "bold"}}>
                <span style={{color: "rgb(250, 98, 47)"}}>{saleRate}%</span> {search.priceSales}원
                <span style={{display: "block", textDecoration:"line-through", color : "gray"}}>{search.priceStandard}원</span>
              </Card.Text>
            : <Card.Text style={{fontSize: "16px", fontWeight: "bold"}}>{search.priceStandard}원</Card.Text>
          }
        </Card.Body>
      </Card>
    </Col>
    </div>
  );
};


function SearchCard() {

    let {search} = useParams();
    let [searches, setSerches] = useState([]);

  useEffect(() => {
    async function get() {
      try {
        //응답 성공
        const response = await axios.get(
            `/ttb/api/ItemSearch.aspx?ttbkey=ttbgurwn8051154001&Query=${search}&QueryType=Title&MaxResults=100&start=1&SearchTarget=Book&Cover=Big&output=js&Version=20131101`
        );
        setSerches(response.data.item);
      } catch (error) {
        //응답 실패
        console.log("Carousel Error : ", error);
      }
    }
    get();
  }, [search]);
    return (
      <div>
      <div className='SearchCardTitle'><Title title={`'${search}'에 대한 검색결과`}/></div>
      <Container  ontainer style={{width: "1100px"}}>
      <Row sm={1} md={4}>
          {searches.map((data, i) => {
            return <SearchList key={data.isbn} searches={searches} search={data} i={i} />;
          })}
        </Row>
      </Container>
    </div>
    );
}

export default SearchCard;