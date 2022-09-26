import "./Nav.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Nav({ BookDb }) {
  let [navBookDb, setNavBookDb] = useState(BookDb);

  return (
    <div className="headerNav">
      <div className="navb">
        <div className="navCa">
          카테고리
          <ul className="Navbar_sub">
            {navBookDb.map((data) => {
              return (
                <li className="sub">
                  {data.name}
                  <ul className="sub_sub">
                    {data.Db.map((tempData) => {
                      return (
                        <Link to={`/list/${data.category}/${tempData.key}`} 
                              state={{ value: `${tempData.value}` }}>
                          <li>{tempData.value}</li>
                        </Link>
                      );
                    })}
                  </ul>
                </li>
              );
            })}
          </ul>
        </div>

        <ul className="navbUl">
          <li>
            <Link to={`/list/Book/ `} state={{ value: "국내도서" }}>
              국내도서
            </Link>
          </li>
          <li>
            <Link to={`/list/Foreign/ `} state={{ value: "외국도서" }}>
              외국도서
            </Link>
          </li>
          <li>
            <Link to={`/list/Music/ `} state={{ value: "음반/앨범" }}>
              음반/앨범
            </Link>
          </li>
          <li>
            <Link to={`/list/DVD/ `} state={{ value: "DVD" }}>
              DVD
            </Link>
          </li>
        </ul>
        <div className="navbBtn">
          <button className="navbBtn_1">
            <span className="navBtnSpan">샛별 · 낮</span> 배송안내
          </button>
        </div>
      </div>
    </div>
  );
}

export default Nav;
