import { Link, useNavigate } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import food1 from '../images/food1.jpg';
import './Nav.css';



function Nav() {
    let navigate = useNavigate();

    return (
        <div>
            <div>
            <Link onClick={()=> { navigate("/bestbook") }}>베스트셀러</Link>
            <Link onClick={()=> { navigate("/book") }}>국내도서</Link>
            </div>
            <Carousel>
      <Carousel.Item>
        <img
          className="carousel-inner"
          src={food1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel-inner"
          src={food1}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel-inner"
          src={food1}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
    );
}

export default Nav;