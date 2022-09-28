import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

function Cart() {
    const location = useLocation();
    console.log(location.state.ISBN);
    let [cartItem, setCartItem] = useState([]);

    useEffect(() => {
        async function get() {
          try {
            //응답 성공
            const response = await axios.get(
              `/ttb/api/ItemLookUp.aspx?ttbkey=ttbgurwn8051154001&itemIdType=ISBN&ItemId=${location.state.ISBN}&output=js&Version=20131101&Cover=Small`
            );
            console.log(response.data.item);
            let temp = [...cartItem];
            temp.push(response.data.item[0]);
            setCartItem(temp);
            console.log(cartItem);
          } catch (error) {
            //응답 실패
            console.log("Carousel Error : ", error);
          }
        }
        get();
      }, [location]);





    return(
        <div>
            asd
        </div>
    );

}

export default Cart;