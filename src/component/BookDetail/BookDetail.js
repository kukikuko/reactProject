import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useState, useEffect } from "react";
import './BookDetail.css'
import axios from "axios";

function BookDetial() {
    let navigate = useNavigate();
    let [bookInfo, setBookInfo] = useState([]);
    let {itemId} = useParams();

    const Toast = Swal.mixin({
      toast: true,
      position: 'center',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
  })

    const onClickCart = (bookCart) => () => {
      const Cart = (JSON.parse(localStorage.getItem("Cart")) || []);
      let isExists = false;
      Cart.forEach((book) => {
        if(bookCart.isbn === book.isbn) isExists = true;
      });
      if (isExists) {
        Swal.fire({
          title: "이미 장바구니에 담으셨습니다!",
          text : "장바구니로 이동하시겠습니까?",
          icon: "warning",

          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor : "#d33",
          cancelButtonText : "취소",
          confirmButtonText : "이동"
        }).then(result => {
          if(result.isConfirmed) {
            navigate("/cart");
          }
        })
        return;
      }
      Toast.fire({
        icon: 'success',
        title: '장바구니에 상품을 담았습니다.'
      })
      Cart.push(bookCart);
      localStorage.setItem("Cart", JSON.stringify(Cart));
    };

    useEffect(() => {
      async function get() {
        try {
          //응답 성공
          const response = await axios.get(
            `/ttb/api/ItemLookUp.aspx?ttbkey=ttbgurwn8051154001&itemIdType=ItemId&ItemId=${itemId}&output=js&Version=20131101&Cover=Big`
          );
          setBookInfo(response.data.item[0]);
        } catch (error) {
          //응답 실패
          console.log("Carousel Error : ", error);
        }
      }
      get();
    }, [itemId]);

    console.log(bookInfo);

    let priceStandard = bookInfo.priceStandard;
    let priceSales = bookInfo.priceSales;
    let description = bookInfo.description;
    let sale = Math.floor(((priceStandard-priceSales)/priceStandard)*100);

    return (
      <div style={{height : "1000px"}}>
        <article className="detailArticle" >
          <div>
          <img className="detailImg" src={bookInfo.cover} />
          </div>

          <div className="detailMain">
            <div className="detailDlv">당일배송</div>
            <div><h4>{bookInfo.title}</h4></div>
            <div className="detailPrice">
            { priceStandard != priceSales 
              ? <div>
                  <h3>
                    <span className="dtSale">{sale}% </span>{bookInfo.priceSales}
                    <span className="dtWon"> 원</span>
                  </h3>
                  <div className="dtAuthor">
                    <span className="dtStPrice">{bookInfo.priceStandard}원</span>
                    <span>{bookInfo.author}</span>
                  </div>
                </div>
              : <div>
                  <h3>{bookInfo.priceStandard}<span className="dtWon"> 원</span></h3>
                  <span>{bookInfo.author}</span>
                </div>
            }
            </div>
            <div>
              <dl className="dtDl">
                <dt className="dt dl">배송료</dt>
                <dd className="dt">
                  무료배송<br />
                  <span className="ddSp">
                    23시 전 주문 시 내일 아침 7시 전 도착 <br />
                    (대구·부산·울산 샛벌배송 운영시간 별도 확인)
                  </span> 
                </dd>
              </dl>
              <dl className="dtDl">
                <dt className="dt dl">발매일</dt> 
                <dd className="dt">{bookInfo.pubDate}</dd>
              </dl>
              <dl className="dtDl">
                <dd className="dt">본 상품은 의도적으로 다량의 구매가 이루어질 경우, 
                    임의 취소가 이루어질 수 있습니다. 구매에 참고 부탁드립니다.
                </dd>
              </dl>
              { description !== ("")
              ? <dl className="dtDl">{bookInfo.description}</dl>
              : null
              }
            </div>
            <div className="dtBtn">
              <button 
                onClick={()=>{
                  window.open(bookInfo.link)}}
                className="dtBtn_1">알라딘으로 이동</button>
              <button className="dtBtn_2" onClick={onClickCart(bookInfo)}>장바구니 담기</button>
            </div>
          </div>
        </article>
      </div>
    );
}

export default BookDetial;