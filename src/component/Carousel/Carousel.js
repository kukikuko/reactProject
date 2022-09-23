import Carousel from "react-bootstrap/Carousel";

function MainCarousel() {
  return (
    <div style={{marginBottom : "100px"}}>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={`${process.env.PUBLIC_URL}/Banner1.png`} alt="First slide" style={{ height: "370px" }} />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={`${process.env.PUBLIC_URL}/Banner2.png`} alt="Second slide" style={{ height: "370px" }} />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={`${process.env.PUBLIC_URL}/Banner3.png`} alt="Third slide" style={{ height: "370px" }} />
          <Carousel.Caption />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default MainCarousel;
