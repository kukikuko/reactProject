import { Link, useNavigate } from "react-router-dom";
import food1 from '../images/food1.jpg';
import './Nav.css';



function Nav() {
    let navigate = useNavigate();

    return (
        <div>
            <container className="headerBar">
            <Link onClick={()=> { navigate("/bestbook") }}>베스트셀러</Link>
            <Link onClick={()=> { navigate("/book") }}>국내도서</Link>
            <Link onClick={()=> { navigate("/book") }}>외국도서</Link>
            <Link onClick={()=> { navigate("/music") }}>음반</Link>
            </container>
        </div>
    );
}

export default Nav;