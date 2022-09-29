import { useState } from "react";
import Title from "../../component/Title/Title";
import './Cart.css';
import { FiMapPin } from "react-icons/fi";

function CartList({cartItem}) {

    let totalPrice = 0;

    for(let item of cartItem) {
        totalPrice += item.priceSales; 
    }

    return(
        <div className="cart">
            <div className="cartList">
                {cartItem.map((data) => {
                    return (
                        <div className="listDiv">
                            <img className="listImg" src={data.cover} />
                            <div className="listTitle">
                                {data.title}
                            </div>
                            <div className="listPrice">
                                {data.priceSales}원
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="cartPrice">
            <div className="cartPriceDiv">
                <div className="cartPriceDiv_1">
                    <h3 className="CPD1_h3"><FiMapPin className="CPD1_icon" />배송지</h3>
                    <div>
                        <p><span>배송지를 등록</span>하고 <br />구매 가능한 상품을 확인하세요!</p>
                        <button>주소검색</button>
                    </div>
                </div>
                <div className="cartPriceDiv_2">
                    <div>
                        <span className="CPD2_span1">상품금액</span>
                        <span className="CPD2_span2">{totalPrice}원</span>
                    </div>
                    <div>
                        <span className="CPD2_span1">상품할인금액</span>
                        <span className="CPD2_span2">0원</span>
                    </div>
                    <div>
                        <span className="CPD2_span1">배송비</span>
                        <span className="CPD2_span2">0원</span>
                    </div>
                    <div>
                        <span className="CPD2_span1">결제예정금액</span>
                        <span className="CPD2_span2"><span className="CPD2_span">{totalPrice} </span>원</span>
                    </div>
                </div>
                <div className="cartPriceDiv_3">
                    <button>배송지를 입력해주세요</button>
                    <ul>
                        <li>[주문완료] 상태일 경우에만 주문 취소 가능합니다.</li>
                        <li>[주문내역 상세페이지]에서 직접 취소하실 수 있습니다</li>
                    </ul>
                </div>
            </div>
            </div>
        </div>
    )
}









function Cart() {

    let [cartItem, setCartItem] = useState(JSON.parse(localStorage.getItem("Cart")));
        
    console.log(cartItem);

    return(
        <div>
            <Title title={"장바구니"} />
            <CartList cartItem={cartItem}/>
        </div>
    );

}

export default Cart;

