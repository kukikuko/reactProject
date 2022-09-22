import { useNavigate } from "react-router-dom";
import './Nav.css';



function Nav() {
    let navigate = useNavigate();

    return (
          <container className="headerBar">
            <div className="section">
              <div className="logo">logo</div>
              <div className="navb">
                <ul>
                  <li onClick={()=> { navigate("/bestbook") }}>베스트셀러</li>
                  <li onClick={()=> { navigate("/book") }}>국내도서</li>
                  <li onClick={()=> { navigate("/books") }}>외국도서</li>
                  <li onClick={()=> { navigate("/music") }}>음반</li>
                </ul>
              </div>
              <form>
                <input placeholder="검색어를 입력해주세요"></input>
              </form>
            </div>
          </container>
    );
}

export default Nav;