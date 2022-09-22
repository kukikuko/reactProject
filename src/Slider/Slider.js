import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Slider.css";
import { Pagination, Navigation } from "swiper";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Slider({params}) {

  const [getData, setGetData] = useState([]);

  //비동기적 동작
  useEffect(() => {
    async function get() {
      try {
        //응답 성공
        const response = await axios.get(
          `/ttb/api/ItemList.aspx?ttbkey=ttbgurwn8051154001&QueryType=Bestseller&MaxResults=100&start=1&SearchTarget=${params}&Cover=Big&output=js&Version=20131101`
        );
        console.log("Response DATA : ", response.data.item.slice(0, 10));
        setGetData(response.data.item.slice(0, 12)); //10개만 보이도록!
      } catch (error) {
        //응답 실패
        console.log("Carousel Error : ", error);
      }
    }
    get();
  }, [params]);


  return (
    <>
      <Swiper
        // style={ { height : "500px"}}
        slidesPerView={4}
        spaceBetween={30}
        slidesPerGroup={4}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      > {
        getData.map((item) => {
          let priceStandard = item.priceStandard;
          let priceSales = item.priceSales;
          let sale = Math.floor(((priceStandard - priceSales) / priceStandard) * 100);

          return (
          <SwiperSlide>
            <img
              src={item.cover}></img>
            <div style={{marginTop : "20px", fontWeight : "400"}}>{item.title}</div>
            <div>
              <span style={{color: "rgb(250, 98, 47)"}}>{sale}%</span> {item.priceSales}원
              <span 
                style={{display: "block", textDecoration:"line-through", color : "gray"}}>
                {item.priceStandard}원
              </span>
            </div>
          </SwiperSlide>
      )}
      )}
      </Swiper>
    </>
  );
};

