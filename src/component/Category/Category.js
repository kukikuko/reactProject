
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "../Slider/Slider";
import './Category.css';


function Category({CategoryDb}) {
    const [text, setText] = useState(CategoryDb[0].value);
    const [currentClick, setCurrentClick] = useState(CategoryDb[0].key);
    const [prevClick, setPrevClick] = useState(null);
    
    let navigate = useNavigate();

    const GetClick = (e) => {
        setCurrentClick(e.target.getAttribute("value"));
        setText(e.target.getAttribute("name"));
    }

    useEffect((e) => {
        if (currentClick !== null) {
            let current = document.querySelector
            (`div.Category ul.list li button[value="${currentClick}"]`);
            current.setAttribute("class", "clicked_listBtn")
        }

        if(prevClick !== null) {
            let prev = document.querySelector
            (`div.Category ul.list li button[value="${prevClick}"]`);
            prev.setAttribute("class", "");

        }
        setPrevClick(currentClick);
    },
    [currentClick])

    return (
        <div className="Category">
            <ul className="list">
                {CategoryDb.map((Category) => (
                    <li>
                        <button
                            onClick={(e) => {GetClick(e);}}
                            value={Category.key}
                            name={Category.value}
                        > 
                            {Category.value}
                        </button>
                    </li>
                ))}
            </ul>

            <>
                <Slider params={''} params2={currentClick}/>
            </>
            <div className="CategoryBtn">
                <button 
                    onClick={() => {
                        navigate(`/list/Book/${currentClick}`)
                    }}
                    className="CategoryBtn_1">{text} 전체보기</button>
            </div>
        </div>
    )
}
export default Category;