import './SearchCard.css';
import { Col, Card, Row, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useParams, useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from "axios";

function SearchCard() {

    const location = useLocation();
  let {search} = useParams();

  useEffect(() => {
    async function get() {
      try {
        //응답 성공
        const response = await axios.get(
            `/ttb/api/ItemSearch.aspx?ttbkey=ttbgurwn8051154001&Query=${search}&QueryType=Title&MaxResults=100&start=1&SearchTarget=All&Cover=Big&output=js&Version=20131101`
        );
        // setBooks(response.data.item);
        console.log(response.data.item);
      } catch (error) {
        //응답 실패
        console.log("Carousel Error : ", error);
      }
    }
    get();
  }, [search]);
    return (
        <div>
            asd
        </div>
    );
}

export default SearchCard;