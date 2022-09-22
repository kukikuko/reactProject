import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import './BookDetail.css'

function BookDetial({books}) {
    let {id} = useParams();

    let bookInfo = books.find((data) => {
      return (data.itemId == id);
    })

    let priceStandard = bookInfo.priceStandard;
    let priceSales = bookInfo.priceSales;
    let sale = Math.floor(((priceStandard-priceSales)/priceStandard)*100);

    return (
      <div style={{width : "1050px", height : "1000px"}}>
        <article className="detailArticle" >
          <div>
          <img className="detailImg" src={bookInfo.cover} />
          </div>
          <div className="detailMain">
            <div style={{ color: "rgb(153, 153, 153)", fontWeight: "bold"}}>당일배송</div>
            <div><h4>{bookInfo.title}</h4></div>
            <div style={{marginBottom: "20px", borderBottom: "1px solid lightgray", paddingBottom :"20px"}}>
            { priceStandard != priceSales 
              ? <div>
                  <h3><span style={{color: "rgb(250, 98, 47)"}}>{sale}% </span>{bookInfo.priceSales}<span style={{fontSize :"20px", fontWeight :"bold"}}> 원</span></h3>
                  <span style={{textDecoration:"line-through", color : "gray", fontSize: "18px"}}>{bookInfo.priceStandard}원</span>
                </div>
              : <div><h3>{bookInfo.priceStandard}<span style={{fontSize :"20px", fontWeight :"bold"}}> 원</span></h3></div>
            }
            </div>
            <div>
              <dl style={{fontSize:"18px"}}>{bookInfo.author}</dl>
              <dl style={{fontSize:"18px"}}>배송료 무료</dl>
              <dl style={{fontSize:"18px"}}>발매일 {bookInfo.pubDate}</dl>
              <dl style={{fontSize:"18px"}}>상세 설명 {bookInfo.description}</dl>
            </div>
          </div>
        </article>
      </div>
    );
}

export default BookDetial;